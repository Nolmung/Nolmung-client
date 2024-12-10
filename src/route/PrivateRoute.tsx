import LoginPromptModal from '@/common/components/loginPromptModal';
import getIsLogin from '@/common/utils/getIsLogin';
import { useLoginPromptModalStore } from '@/stores/useLoginPromptModalStore';
import { useEffect } from 'react';

interface PrivateRouteProps {
  outlet: JSX.Element;
}

const PrivateRoute = ({ outlet }: PrivateRouteProps) => {
  const isLogin = getIsLogin();
  const { open } = useLoginPromptModalStore();

  useEffect(() => {
    if (!isLogin) {
      open();
    }
  }, [isLogin, open]);

  if (!isLogin) {
    return <LoginPromptModal closeModal={() => {}} />;
  }
  return outlet;
};

export default PrivateRoute;
