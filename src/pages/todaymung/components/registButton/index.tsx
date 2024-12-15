import { S } from '../../styles/TodayMungCalendarRoot.style';
import { PlusIcon } from '@/assets/images/svgs';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import { toast } from 'react-toastify';
import ReactGA from 'react-ga4';

interface RegistButtonProps {
  active: boolean;
}
const RegistButton = ({ active }: RegistButtonProps) => {
  const navigate = useNavigate();
  const navigateToTodaymungWrite = () => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'Write Todaymung',
    });
    active
      ? toast.error('이미 작성하신 오늘멍이 있습니다 !')
      : navigate(ROUTE.TODAYMUNG_WRITE());
  };
  return (
    <S.TodaymungInsertButton
      onClick={navigateToTodaymungWrite}
      $status={active}
    >
      <PlusIcon /> <S.ButtonText>오늘멍 작성하기</S.ButtonText>
    </S.TodaymungInsertButton>
  );
};

export default RegistButton;
