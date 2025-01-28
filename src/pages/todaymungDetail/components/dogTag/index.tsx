import { S } from '../../styles/DogTagCard.style';
import { DogsType } from '../../types/DiaryType';

interface DogTagCardProps {
  data: DogsType;
}

const DogTagCard = (data: DogTagCardProps) => {
  return (
    <S.Wrapper aria-label={data.data.dogName + ' 강아지 태그'}>
      <S.DogImage
        src={`${data.data.dogProfileImageUrl}`}
        onError={(e) => {
          e.currentTarget.src = '/svgs/todayMungNoListIcon.svg';
        }}
      />
      <S.DogName>{data.data.dogName}</S.DogName>
    </S.Wrapper>
  );
};

export default DogTagCard;
