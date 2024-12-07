import ReviewCard from './components/ReviewCard';
import S from './styles/index.style';
import useModal from '@/common/hooks/useModal';
import Modal from '@/common/components/modal';
import Button from '@/common/components/button/Button';
import { useGetReviews } from './queries';
function MyReview() {
  const { openModal, isOpen, closeModal } = useModal();
  const { data, isLoading, isError } = useGetReviews();
  const handleModalYesButtonClick = () => {
    /**@Todo 리뷰 삭제 API 호출 */
    alert('리뷰 삭제 API 호출');
    closeModal();
  };

  console.log('data', data);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error loading reviews</p>;

  return (
    <>
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
        {data.map((review) => (
          <ReviewCard openModal={openModal} data={review} />
        ))}
      </S.Wrapper>
    </>
  );
}

export default MyReview;
