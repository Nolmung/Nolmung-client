import { S } from './styles/index.style';
import { todaymungDetailData } from '@/mocks/data/todaymungDetailData';
import { DiaryType } from './types/DiaryType';
import { DotdotdotIcon } from '@/assets/images/svgs';
import PlaceTagCard from './components/placeTag';
import DogTagCard from './components/dogTag';
import TextContent from './components/textContent';
import ImageCard from './components/imageCard';
import EditButton from './components/editButton';
import { useState } from 'react';

const TodayMungDetail = () => {
  const [editToggle, setEditToggle] = useState(false);
  const diaryData: DiaryType = todaymungDetailData.data;
  const handleToggleClick = () => {
    setEditToggle(!editToggle);
  };
  /**
   * 아래에 map 해놓은 부분은 DiaryData.dogs에 강아지 이름이 없어서 따로 추가해주신다고하셔서 map안돌리고 따로 주석 쳐놓았습니다.
   */
  return (
    <S.Wrapper>
      <S.Container>
        <S.DateArea>
          <S.DiaryCreatedAt>{diaryData.createdAt}</S.DiaryCreatedAt>
          {editToggle && <EditButton />}
          <DotdotdotIcon
            onClick={handleToggleClick}
            fill={editToggle ? '#d9d9d9' : '#080808'}
          />
        </S.DateArea>
        {diaryData.places && (
          <S.PlaceArea>
            <S.PlaceAreaTitle>장소</S.PlaceAreaTitle>
            <S.PlaceTagCardArea>
              {diaryData.places.map((data) => {
                return <PlaceTagCard key={data.placeId} data={data} />;
              })}
            </S.PlaceTagCardArea>
          </S.PlaceArea>
        )}
        {diaryData.dogs && (
          <S.DogsArea>
            <S.DogsAreaTitle>오늘을 함께한 반려견</S.DogsAreaTitle>
            {/* {diaryData.dogs.map((data) => {
              return <DogTagCard key={data.dogId} data={data} />;
            })} */}
            <DogTagCard data={diaryData.dogs[0]} />
          </S.DogsArea>
        )}
        <S.TextContentArea>
          <TextContent title={diaryData.title} content={diaryData.content} />
        </S.TextContentArea>
        {diaryData.medias && (
          <S.MediaFileArea>
            {diaryData.medias.map((data) => {
              return <ImageCard data={data} />;
            })}
            <ImageCard data={diaryData.medias[0]} />
            <ImageCard data={diaryData.medias[0]} />
            <ImageCard data={diaryData.medias[0]} />
          </S.MediaFileArea>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default TodayMungDetail;
