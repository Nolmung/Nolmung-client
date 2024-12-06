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

function TodayMungWrite() {
  const navigate = useNavigate();
  const { data: dogsData } = useGetDogs();
  const { reviewlist } = useReviewStore();
  const { mutate: diaryMutate } = usePostDiary();
  const { postReviewsSequentially } = usePostReviews(); // usePostReviews 훅에서 mutate 가져오기
  const { title, content, places, medias, publicYn, dogs } =
    useTodayMungStore();

  const handleCompleteButtonClick = () => {
    const diaryRequest = {
      title,
      content,
      places,
      medias,
      publicYn,
      dogs,
    };

    if (diaryRequest.title && diaryRequest.content) {
      diaryMutate(diaryRequest);
    }

    const reviewRequestList: PostReviewRequest[] = [];

    if (reviewlist.length === 0) {
      return;
    }

    for (let review of reviewlist) {
      const reviewRequest = {
        placeId: review.placeId,
        rating: review.rating,
        category: review.category,
        labels: review.labels.map((label) => ({
          labelId: label.labelId,
          labelName: label.labelName,
        })),
      };
      reviewRequestList.push(reviewRequest);
    }
    postReviewsSequentially(reviewRequestList);
  };

  const navigateToTodaymungPlaceRegist = () => {
    navigate(ROUTE.TODAYMUNG_PLACE_REGIST());
  };

  return (
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
                    place_name={mock.placeName}
                    road_address={mock.roadAddress}
                    my_rate={mock.rating}
                  />
                ))}
              <S.PlaceAddButton onClick={navigateToTodaymungPlaceRegist}>
                <PlusIcon width={20} height={20} />
              </S.PlaceAddButton>
            </S.PlaceCardWrapper>
          </S.PlaceWrapper>
        </div>
        <div style={{ position: 'relative' }}>
          <S.Title>오늘을 함꼐한 반려견</S.Title>
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
  );
}

export default TodayMungWrite;
