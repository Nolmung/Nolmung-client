import { S } from '../../styles/NoDiaryList.style';
import RegistButton from '../registButton';

/** 오늘멍이 없을 때 ListView */
const NoDiaryList = () => {
  return (
    <S.Wrapper>
      <img src="/webps/noDiaryList.webp" width={200} />
      <S.SubText>아직 작성한 오늘멍이 없습니다</S.SubText>
      <RegistButton active={false} />
    </S.Wrapper>
  );
};

export default NoDiaryList;
