import { S } from '../styles/login.styles';
import ReactGA from 'react-ga4';

function KakaoLoginButton() {
  const handleKakaoLogin = () => {
    window.location.href = import.meta.env.VITE_KAKAO_API_URL;
    ReactGA.event({
      category: 'User',
      action: 'Click Kakao Login',
      label: 'User clicked on Kakao login button',
    });
  };

  return (
    <>
      <S.KaKaoButton onClick={handleKakaoLogin}>
        카카오로 로그인하기
      </S.KaKaoButton>
    </>
  );
}

export default KakaoLoginButton;
