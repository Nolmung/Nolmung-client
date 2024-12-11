import { S } from './styles/index.style';
import { useParams } from 'react-router-dom';
import { DiaryType } from './types/DiaryType';
import { DotdotdotIcon } from '@/assets/images/svgs';
import PlaceTagCard from './components/placeTag';
import DogTagCard from './components/dogTag';
import TextContent from './components/textContent';
import ImageCard from './components/imageCard';
import EditButton from './components/editButton';
import { useState } from 'react';
import { useTodaymungDetailData } from './queries';
import { LoadingSpinnerLottie } from '@/common/components/lottie';

const TodayMungDetail = () => {
  const { diaryId } = useParams<{ diaryId: string }>();
  const numericDiaryId = Number(diaryId);
  const {
    data: todaymungDetailData,
    isLoading,
    isError,
  } = useTodaymungDetailData(numericDiaryId);

  const [editToggle, setEditToggle] = useState(false);
  if (isLoading) {
    return <LoadingSpinnerLottie />;
  }
  if (isError) {
    return <LoadingSpinnerLottie />;
  }

  const diaryData: DiaryType = todaymungDetailData.data;
  const handleToggleClick = () => {
    setEditToggle(!editToggle);
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.DateArea>
          <S.DiaryCreatedAt>{diaryData.createdAt}</S.DiaryCreatedAt>
          {editToggle && (
            <EditButton diaryId={diaryData.diaryId} medias={diaryData.medias} />
          )}
          <DotdotdotIcon
            onClick={handleToggleClick}
            fill={editToggle ? '#d9d9d9' : '#080808'}
          />
        </S.DateArea>
        {diaryData.places.length > 0 && (
          <S.PlaceArea>
            <S.PlaceAreaTitle>장소</S.PlaceAreaTitle>
            <S.PlaceTagCardArea>
              {diaryData.places.map((data) => {
                return <PlaceTagCard key={data.placeId} data={data} />;
              })}
            </S.PlaceTagCardArea>
          </S.PlaceArea>
        )}
        {diaryData.dogs && diaryData.dogs.length > 0 && (
          <S.DogsArea>
            <S.DogsAreaTitle>오늘을 함께한 반려견</S.DogsAreaTitle>
            <S.DogTagList>
              {diaryData.dogs.map((dogData) => (
                <DogTagCard data={dogData} />
              ))}
            </S.DogTagList>
          </S.DogsArea>
        )}
        <S.TextContentArea>
          <TextContent title={diaryData.title} content={diaryData.content} />
        </S.TextContentArea>
        <S.MediaFileArea>
          {diaryData.medias.length > 0 && (
            <>
              {diaryData.medias.map((data) => (
                <ImageCard data={data} key={data.mediaId} />
              ))}
            </>
          )}
        </S.MediaFileArea>
      </S.Container>
    </S.Wrapper>
  );
};

export default TodayMungDetail;
