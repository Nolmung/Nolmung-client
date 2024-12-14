import { S } from '../styles/login.styles';

function KakaoLoginButton() {
  const handleKakaoLogin = () => {
    window.location.href = import.meta.env.VITE_KAKAO_API_URL;
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
