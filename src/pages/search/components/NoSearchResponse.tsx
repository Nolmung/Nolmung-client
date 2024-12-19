import { S } from '../styles/NoSearchHistory.style';
function NoSearchResponse() {
  return (
    <S.NoResultWrapper>
      {/* <img src="/webps/StandBrownDog.webp" width={200} /> */}
      <img src="/svgs/exclamationIcon.svg"></img>
      <S.NoResultSubText>검색 결과가 없습니다.</S.NoResultSubText>
      <S.NoResultDescription>
        찾고 있는 결과가 없다면 직접 등록해 보세요.
      </S.NoResultDescription>
    </S.NoResultWrapper>
  );
}

export default NoSearchResponse;
