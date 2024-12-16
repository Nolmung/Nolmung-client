import { PlusIcon } from '@/assets/images/svgs';
import VisitedPlaceCard from './components/VisitedPlaceCard';
import S from './styles/index.style';
import Editor from './components/Editor';
import MediaGroup from './components/MediaGroup';
import Button from '@/common/components/button/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import { useGetDogs, usePostDiary } from './queries';
import DogCard from './components/DogCard';
import { useReviewStore } from '../todaymungPlaceRegist/stores/reviewStore';
import { useTodayMungStore } from './stores/todayMungStore';
import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';
import Modal from '@/common/components/modal';
import { useConfirmModalStore } from '@/stores/useConfirmModalStore';
import { useGetTodayReview } from '../todaymungPlaceRegist/queries';
import { toast } from 'react-toastify';
import { LoadingSpinnerLottie } from '@/common/components/lottie';
import { GetTodayReviewResponse } from '@/service/apis/review/index.type';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

function TodayMungWrite() {
  const navigate = useNavigate();
  const {
    data: todayReviewData,
    isLoading: todayReviewLoading,
    isError: todayReviewError,
  } = useGetTodayReview();

  const { title, content, dogs, addPlaces } = useTodayMungStore();
  
  useEffect(() => {
    todayReviewData?.map((data) => addPlaces(data.placeId));
  }, [todayReviewData]);
  
  const { data: dogsData } = useGetDogs();
  const { mutate: diaryMutate } = usePostDiary();

  useSetDocumentTitle('오늘멍 작성하기');

  const handleCompleteButtonClick = async () => {
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

        toast.error(alertMessage);
        return;
      }
    }

    diaryMutate();
  };

  const navigateToTodaymungPlaceRegist = () => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'Click Add Place Button',
      label: 'Add a new place during TodayMung write process',
    });
    navigate(ROUTE.TODAYMUNG_PLACE_REGIST());
  };
  const { isConfirmModalOpen, closeConfirmModal } = useConfirmModalStore();
  const { deleteReviewAll } = useReviewStore();
  const { deleteTodaymungAll } = useTodayMungStore();

  if (todayReviewLoading) return <LoadingSpinnerLottie />;
  if (todayReviewError) return <div>오늘의 리뷰를 불러오지 못했습니다.</div>;

  return (
    <>
      {isConfirmModalOpen && (
        <Modal isOpen={isConfirmModalOpen} closeModal={closeConfirmModal} height={'fit-content'}>
          <S.ConfirmModalContent>
            <S.ConfirmModalTitle>
              작성중인 내용이 사라집니다. <br />
              정말로 나가시겠습니까?
            </S.ConfirmModalTitle>

            <S.ButtonWrapper>
              <Button
                width="100%"
                height="44px"
                borderRadius="8px"
                fontSize="16px"
                fontWeight="500"
                onClick={closeConfirmModal}
              >
                취소
              </Button>
              <Button
                width="100%"
                height="44px"
                backgroundColor="#17AA1A"
                color="#fff"
                borderRadius="8px"
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
          <div style={{ marginTop: '30px' }}>
            <S.Title>장소</S.Title>
            <S.PlaceWrapper>
              <S.PlaceCardWrapper>
                {(todayReviewData as GetTodayReviewResponse[]).map(
                  (data, index) => (
                    <VisitedPlaceCard
                      key={`${data.placeId}-${index}`}
                      category={data.category}
                      placeName={data.placeName}
                      roadAddress={data.address}
                      rating={data.rating}
                    />
                  ),
                )}
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
