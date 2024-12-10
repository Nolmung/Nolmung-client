import LoginPromptModal from '@/common/components/loginPromptModal';
import { ROUTE } from '@/common/constants/route';
import getIsLogin from '@/common/utils/getIsLogin';
import { useLoginPromptModalStore } from '@/stores/useLoginPromptModalStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface PrivateRouteProps {
  outlet: JSX.Element;
}

const PrivateRoute = ({ outlet }: PrivateRouteProps) => {
  const isLogin = getIsLogin();
  const { open, close } = useLoginPromptModalStore();
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(ROUTE.LOGIN(), { replace: true });
    close();
  };

  useEffect(() => {
    if (!isLogin) {
      open();
    }
  }, [isLogin, open]);

  if (!isLogin) {
    return <LoginPromptModal closeModal={closeModal} />;
  }
  return outlet;
};

export default PrivateRoute;
