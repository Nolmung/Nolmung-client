import { S } from './styles/index.style';
import { useParams } from 'react-router-dom';
import { DiaryType } from './types/DiaryType';
import { DotdotdotIcon } from '@/assets/images/svgs';
import PlaceTagCard from './components/placeTag';
import DogTagCard from './components/dogTag';
import TextContent from './components/textContent';
import ImageCard from './components/imageCard';
import EditButton from './components/editButton';
import { useState, useEffect, useRef } from 'react';
import { useGetTodaymungDetailData, useTodaymungReview } from './queries';
import { LoadingSpinnerLottie } from '@/common/components/lottie';
import { decodeToken } from '@/common/utils/configToken';
import getIsLogin from '@/common/utils/getIsLogin';
import ReactGA from 'react-ga4';
import { convertFormatDate } from '@/common/utils/convertFormatDate';
import dayjs from 'dayjs';
import SEO from '@/common/components/SEO';

const TodayMungDetail = () => {
  const { diaryId } = useParams<{ diaryId: string }>();
  const numericDiaryId = Number(diaryId);
  let editActive = null;
  const {
    data: todaymungDetailData,
    isLoading,
    isError,
  } = useGetTodaymungDetailData(numericDiaryId);

  const diaryData: DiaryType | undefined = todaymungDetailData?.data;

  const reviewDate = diaryData
    ? dayjs(diaryData.createdAt).format('YYYY-MM-DD')
    : '';
  const { data: todayReviewData } = useTodaymungReview(
    getIsLogin() ? reviewDate : '',
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (dotRef.current && !dotRef.current.contains(event.target as Node)) {
      setEditToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (getIsLogin()) {
    const token = localStorage.getItem('accessToken');
    const { id: postUserId } = decodeToken(token);
    editActive = postUserId;
  }

  const [editToggle, setEditToggle] = useState(false);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (todaymungDetailData) {
      ReactGA.event({
        category: 'Diary',
        action: 'View Diary',
        label: `Diary ID: ${numericDiaryId}`,
      });
    }
  }, [todaymungDetailData]);

  if (isLoading) {
    return <LoadingSpinnerLottie />;
  }
  if (isError) {
    return <LoadingSpinnerLottie />;
  }

  const handleToggleClick = () => {
    ReactGA.event({
      category: 'Diary',
      action: 'Click Edit Button',
      label: `Diary ID: ${numericDiaryId}`,
    });
    setEditToggle(!editToggle);
  };

  return (
    <S.Wrapper aria-label="오늘멍 상세 페이지" role="main">
      <SEO title={'오늘멍 상세 | 놀멍'} />
      {diaryData && (
        <S.Container>
          <S.DateArea>
            <S.DiaryCreatedAt
              aria-label={`작성일: ${convertFormatDate(diaryData.createdAt)}`}
            >
              {convertFormatDate(diaryData.createdAt)}
            </S.DiaryCreatedAt>
            <div ref={dotRef}>
              {editToggle && (
                <EditButton
                  diaryId={diaryData.diaryId}
                  medias={diaryData.medias}
                />
              )}
              {diaryData.userId === editActive && (
                <DotdotdotIcon
                  onClick={handleToggleClick}
                  fill={editToggle ? '#d9d9d9' : '#080808'}
                />
              )}
            </div>
          </S.DateArea>

          {todayReviewData && (
            <S.PlaceArea aria-label="장소 태그">
              <S.PlaceAreaTitle>장소</S.PlaceAreaTitle>
              <S.PlaceTagCardArea aria-label="장소 태그 리스트" role="list">
                {todayReviewData.data.map((data: any) => {
                  return <PlaceTagCard key={data.placeId} data={data} />;
                })}
              </S.PlaceTagCardArea>
            </S.PlaceArea>
          )}
          {diaryData.dogs && diaryData.dogs.length > 0 && (
            <S.DogsArea aria-label="오늘을 함께한 반려견">
              <S.DogsAreaTitle>오늘을 함께한 반려견</S.DogsAreaTitle>
              <S.DogTagList
                aria-label="오늘을 함께한 반려견 리스트"
                role="list"
              >
                {diaryData.dogs.map((dogData) => (
                  <DogTagCard data={dogData} key={dogData.dogId} />
                ))}
              </S.DogTagList>
            </S.DogsArea>
          )}
          <S.TextContentArea aria-label="오늘의 일기 내용" role="article">
            <TextContent title={diaryData.title} content={diaryData.content} />
          </S.TextContentArea>
          <S.MediaFileArea aria-label="오늘의 일기 이미지 리스트" role="list">
            {diaryData.medias.length > 0 && (
              <>
                {diaryData.medias.map((data) => (
                  <ImageCard data={data} key={data.mediaId} />
                ))}
              </>
            )}
          </S.MediaFileArea>
        </S.Container>
      )}
    </S.Wrapper>
  );
};

export default TodayMungDetail;
