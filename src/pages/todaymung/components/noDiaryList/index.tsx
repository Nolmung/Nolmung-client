import { TodayMungNoListIcon } from '@/assets/images/svgs';
import { S } from '../../styles/NoDiaryList.style';
import RegistButton from '../registButton';

const NoDiaryList = () => {
  return (
    <S.Wrapper>
      <TodayMungNoListIcon />
      <S.SubText>아직 작성한 오늘멍이 없습니다</S.SubText>
      <RegistButton active={true} />
    </S.Wrapper>
  );
};

export default NoDiaryList;
