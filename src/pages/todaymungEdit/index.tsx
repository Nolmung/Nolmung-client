import S from './styles/index.style';
import Editor from './components/Editor';
import MediaGroup from './components/MediaGroup';
import Button from '@/common/components/button/Button';
import { useGetDogs, useEditDiary } from './queries';
import DogCard from './components/DogCard';
import { useTodayMungStore } from './stores/todayMungStore';
import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';
import { useGetTodaymungDetailData } from '@pages/todaymungDetail/queries';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { LoadingSpinnerLottie } from '@/common/components/lottie';
import { toast } from 'react-toastify';
import ReactGA from 'react-ga4';
import { convertFormatDate } from '@/common/utils/convertFormatDate';
import { PlusIcon } from '@/assets/images/svgs';
import VisitedPlaceCard from '../todaymungWrite/components/VisitedPlaceCard';
import { useGetTodayReview } from '../todaymungPlaceRegist/queries';
import { GetTodayReviewResponse } from '@/service/apis/review/index.type';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';

function TodayMungEdit() {
  useSetDocumentTitle('오늘멍 작성하기');
  const {
    title,
    setTitle,
    content,
    setContent,
    dogs,
    medias,
    addMedia,
    publicYn,
    setPublicYn,
    deleteTodaymungAll,
  } = useTodayMungStore();
  const navigate = useNavigate();

  const { diaryId } = useParams<{ diaryId: string }>();
  const numericDiaryId = Number(diaryId);

  const { data: dogsData } = useGetDogs();
  const { data: todayReviewData } = useGetTodayReview();
  const { addDogs } = useTodayMungStore();

  const { mutate: diaryMutate } = useEditDiary();
  const {
    data: todaymungEditData,
    isLoading,
    isError,
  } = useGetTodaymungDetailData(numericDiaryId);

  useEffect(() => {
    if (todaymungEditData) {
      deleteTodaymungAll();
      const { title, content, medias, publicYn } = todaymungEditData.data;
      setTitle(title);
      setContent(content);
      medias.forEach((media: any) => addMedia(media));
      setPublicYn(publicYn);
      todaymungEditData.data.dogs.map((dog: any) => addDogs(dog.dogId));
    }
  }, [todaymungEditData]);

  const handleCompleteButtonClick = () => {
    const diaryRequest = {
      title,
      content,
      dogs,
      publicYn,
      medias,
    };
    ReactGA.event({
      category: 'User Interaction',
      action: 'Clicked Edit Complete Button',
      label: 'TodayMungEdit', // 어떤 화면에서 발생했는지
    });
    if (title || content || dogs.length > 0 || medias.length > 0) {
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
      } else {
        diaryMutate({ diaryRequest, diaryId: numericDiaryId });
      }
    }
  };

  const navigateToTodaymungPlaceRegist = () => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'Click Add Place Button',
      label: 'Add a new place during TodayMung write process',
    });
    navigate(ROUTE.TODAYMUNG_PLACE_REGIST());
  };

  if (isLoading || !todaymungEditData) {
    return <LoadingSpinnerLottie />;
  }
  if (isError) {
    return <div>에러중</div>;
  }

  return (
    <S.Wrapper>
      <S.BannerWrapper>
        <S.BannerImage src="/pngs/TodayMungLogo.png" alt="오늘멍 배너" />
      </S.BannerWrapper>
      <S.ContentWrapper>
        <S.DateText>
          {convertFormatDate(todaymungEditData.data.createdAt)}
        </S.DateText>
        <div>
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
              수정완료
            </Button>
          </S.ButtonWrapper>
        </div>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}

export default TodayMungEdit;
