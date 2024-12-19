import { S } from '../styles/NoSearchHistory.style';
function NoSearchResponse() {
  return (
    <S.NoResultWrapper>
      <img src="/webps/StandBrownDog.webp" width={200} />
      <S.NoResultSubText>검색 결과가 없다 멍 !</S.NoResultSubText>
    </S.NoResultWrapper>
  );
}

export default NoSearchResponse;
