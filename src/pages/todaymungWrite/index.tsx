import { PlusIcon } from '@/assets/images/svgs';
import VisitedPlaceCard from './components/VisitedPlaceCard';
import S from './styles/index.style';
import Editor from './components/Editor';
import MediaGroup from './components/MediaGroup';
import Button from '@/common/components/button/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import { useGetDogs, usePostDiary, usePostReviews } from './queries';
import DogCard from './components/DogCard';
import { useReviewStore } from '../todaymungPlaceRegist/stores/reviewStore';
import { useTodayMungStore } from './stores/todayMungStore';
import { PostReviewRequest } from '@/service/apis/review/index.type';
import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';
import { toast } from 'react-toastify';
import Modal from '@/common/components/modal';
import { useEffect } from 'react';
import { useConfirmModalStore } from '@/stores/useConfirmModalStore';

function TodayMungWrite() {
  const navigate = useNavigate();

  const { reviewlist } = useReviewStore();
  const { title, content, dogs } = useTodayMungStore();

  const { data: dogsData } = useGetDogs();
  const { mutate: diaryMutate } = usePostDiary();
  const { mutate: reviewMutate } = usePostReviews();

  useSetDocumentTitle('오늘멍 작성하기');

  const handleCompleteButtonClick = async () => {
    const reviewRequestList: PostReviewRequest[] = reviewlist.map((review) => ({
      placeId: review.placeId,
      rating: review.rating,
      category: review.category,
      labels: review.labels.map((label) => ({
        labelId: label.labelId,
        labelName: label.labelName,
      })),
    }));

    if (!title || !content || dogs.length === 0) {
      const missingFields = [];
      if (!title) missingFields.push('제목');
      if (!content) missingFields.push('내용');
      if (dogs.length === 0) missingFields.push('반려견');

      if (missingFields.length > 0) {
        const alertMessage = `${missingFields.slice(0, -1).join('과 ')}${
          missingFields.length > 1 ? '과 ' : ''
        }${missingFields.slice(-1)}${
          missingFields.includes('반려견')
            ? '을 선택해주세요.'
            : '을 작성해주세요.'
        }`;

        alert(alertMessage);
        return;
      }
    }

    if (reviewlist.length === 0) {
      await diaryMutate();
      return;
    }

    try {
      if (reviewRequestList.length > 0) {
        await reviewMutate(reviewRequestList);
      }

      await diaryMutate();
    } catch (error) {
      console.error('등록 실패:', error);
      toast.error('등록 중 문제가 발생했습니다.');
    }
  };

  const navigateToTodaymungPlaceRegist = () => {
    navigate(ROUTE.TODAYMUNG_PLACE_REGIST());
  };
  const { isConfirmModalOpen, closeConfirmModal } = useConfirmModalStore();
  const { deleteReviewAll } = useReviewStore();
  const { deleteTodaymungAll } = useTodayMungStore();
  useEffect(() => {
    console.log('confirm', isConfirmModalOpen);
  }, [isConfirmModalOpen]);
  return (
    <>
      {isConfirmModalOpen && (
        <Modal isOpen={isConfirmModalOpen} closeModal={closeConfirmModal}>
          <S.ConfirmModalContent>
            <S.ConfirmModalTitle>
              작성중인 내용이 사라집니다. <br />
              정말로 나가시겠습니까?
            </S.ConfirmModalTitle>

            <S.ButtonWrapper>
              <Button
                width="110px"
                height="44px"
                borderRadius="30px"
                fontSize="16px"
                fontWeight="500"
                onClick={closeConfirmModal}
              >
                취소
              </Button>
              <Button
                width="110px"
                height="44px"
                backgroundColor="#17AA1A"
                color="#fff"
                borderRadius="30px"
                fontSize="16px"
                fontWeight="500"
                onClick={() => {
                  deleteReviewAll();
                  deleteTodaymungAll();
                  closeConfirmModal();
                  navigate(ROUTE.TODAYMUNG());
                }}
              >
                나가기
              </Button>
            </S.ButtonWrapper>
          </S.ConfirmModalContent>
        </Modal>
      )}
      <S.Wrapper>
        <S.BannerWrapper>
          <S.BannerImage src="/pngs/TodayMungLogo.png" alt="오늘멍 배너" />
        </S.BannerWrapper>
        <S.ContentWrapper>
          <div style={{ marginTop: '23px' }}>
            <S.Title>장소</S.Title>
            <S.PlaceWrapper>
              <S.PlaceCardWrapper>
                {reviewlist &&
                  reviewlist.map((mock, index) => (
                    <VisitedPlaceCard
                      key={index}
                      category={mock.category}
                      placeName={mock.placeName}
                      roadAddress={mock.roadAddress}
                      rating={mock.rating}
                    />
                  ))}
                <S.PlaceAddButton onClick={navigateToTodaymungPlaceRegist}>
                  <PlusIcon width={20} height={20} />
                </S.PlaceAddButton>
              </S.PlaceCardWrapper>
            </S.PlaceWrapper>
          </div>
          <div style={{ position: 'relative' }}>
            <S.Title>오늘을 함께한 반려견</S.Title>
            <S.PlaceWrapper>
              <S.PlaceCardWrapper>
                {dogsData?.data?.map((dog) => (
                  <DogCard key={dog.dogId} data={dog} />
                ))}
              </S.PlaceCardWrapper>
            </S.PlaceWrapper>

            <Editor />
            <MediaGroup />
            <S.ButtonWrapper>
              <Button
                width="110px"
                height="44px"
                backgroundColor="#080808"
                color="#fff"
                borderRadius="30px"
                fontSize="16px"
                fontWeight="500"
                onClick={handleCompleteButtonClick}
              >
                작성완료
              </Button>
            </S.ButtonWrapper>
          </div>
        </S.ContentWrapper>
      </S.Wrapper>
    </>
  );
}

export default TodayMungWrite;
