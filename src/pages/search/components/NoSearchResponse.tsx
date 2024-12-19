import { S } from '../styles/NoSearchHistory.style';
function NoSearchResponse() {
  const handleChannelClick = () => {
    window.open('http://pf.kakao.com/_iMxbdn');
  };
  return (
    <S.NoResultWrapper>
      <img style={{ opacity: 0.2 }} src="/svgs/exclamationIcon.svg"></img>
      <S.NoResultSubText>검색 결과가 없습니다.</S.NoResultSubText>
      <S.NoResultDescription>
        찾고 있는 결과가 없다면 직접 등록해 보세요.
      </S.NoResultDescription>
      <S.placeInsertBtn onClick={handleChannelClick}>
        새로운 장소 등록 요청
      </S.placeInsertBtn>
    </S.NoResultWrapper>
  );
}

export default NoSearchResponse;
