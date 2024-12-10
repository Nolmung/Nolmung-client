import { useEffect, useMemo, useRef, useState } from 'react';
import ReviewCard from './components/ReviewCard';
import S from './styles/index.style';
import useModal from '@/common/hooks/useModal';
import Modal from '@/common/components/modal';
import Button from '@/common/components/button/Button';
import { useDeleteReviews, useGetReviews } from './queries';

function MyReview() {
  const { openModal, isOpen, closeModal } = useModal();
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetReviews();

  const observerRef = useRef<HTMLDivElement | null>(null);
  const [deleteReviewId, setDeleteReviewId] = useState<number | null>(null);
  const { mutate: deleteMutation } = useDeleteReviews();

  const handleModalYesButtonClick = () => {
    if (!deleteReviewId) return;
    deleteMutation(deleteReviewId);
    closeModal();
  };

  useEffect(() => {
    if (!observerRef.current || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.01 },
    );

    observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [observerRef.current, hasNextPage, isFetchingNextPage]);

  const allReviews = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) || [];
  }, [data]);

  if (isLoading) return <p>Loading...</p>;

  if (isError) {
    return (
      <div>
        <p>Error loading reviews</p>
        <Button onClick={() => fetchNextPage()}>Retry</Button>
      </div>
    );
  }

  return (
    <S.Wrapper>
      {isOpen && (
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <S.ModalContent>
            리뷰를 삭제하시겠습니까?
            <S.ModalButtonWrapper>
              <Button
                fontSize="18px"
                fontWeight="500"
                onClick={() => closeModal()}
              >
                아니오
              </Button>
              <Button
                fontSize="18px"
                fontWeight="700"
                backgroundColor="#D3FBD4"
                onClick={handleModalYesButtonClick}
              >
                예
              </Button>
            </S.ModalButtonWrapper>
          </S.ModalContent>
        </Modal>
      )}
      {allReviews.map((review) => (
        <ReviewCard
          key={review.id}
          setDeleteReviewId={setDeleteReviewId}
          openModal={openModal}
          data={review}
        />
      ))}
      <div
        ref={observerRef}
        style={{ height: '10px', backgroundColor: 'transparent' }}
      >
        {isFetchingNextPage && <p>Loading more...</p>}
      </div>
    </S.Wrapper>
  );
}

export default MyReview;
