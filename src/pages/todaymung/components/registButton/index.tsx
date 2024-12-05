import { S } from '../../styles/TodayMungCalendarRoot.style';
import { PlusIcon } from '@/assets/images/svgs';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';

const RegistButton = () => {
  const navigate = useNavigate();
  const navigateToTodaymungWrite = () => {
    navigate(ROUTE.TODAYMUNG_WRITE());
  };
  return (
    <S.TodaymungInsertButton onClick={navigateToTodaymungWrite}>
      <PlusIcon /> <S.ButtonText>오늘멍 작성하기</S.ButtonText>
    </S.TodaymungInsertButton>
  );
};

export default RegistButton;
