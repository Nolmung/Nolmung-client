import { S } from '../../styles/NoDiaryList.style';

/** 오늘멍이 없을 때 ListView */
const NoDiaryList = () => {
  return (
    <S.Wrapper>
      <img src="/webps/emptyImg.webp" width={200} />
      <S.SubText>아직 작성한 오늘멍이 없습니다</S.SubText>
    </S.Wrapper>
  );
};

export default NoDiaryList;
