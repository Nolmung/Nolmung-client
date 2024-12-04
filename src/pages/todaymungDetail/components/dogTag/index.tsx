import { S } from '../../styles/DogTagCard.style';
import { DogsType } from '../../types/DiaryType';

interface DogTagCardProps {
  data: DogsType;
}

const DogTagCard = (data: DogTagCardProps) => {
  console.log(data); // data neverUsed로 빌드오류 나와서 잠시 넣어놨습니다 !
  return (
    <S.Wrapper>
      <S.DogImage src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MDlfMTUy%2FMDAxNzIzMTkzOTU1ODkz.pBLkXEuK7dmIgV34JAKmt2LOjOluHB6k-_T2i4CQ9Xsg.dRsjGByR67t2jtjsvYM82M0T42GB9Z0wnZ-9iyllAx8g.JPEG%2F1E7A3564.JPG&type=sc960_832" />
      <S.DogName>장미</S.DogName>
    </S.Wrapper>
  );
};

export default DogTagCard;
