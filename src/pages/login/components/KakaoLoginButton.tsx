import { S } from '../styles/login.styles';

function KakaoLoginButton() {
  const handleKakaoLogin = () => {
    window.location.href = 'https://nolmung.org/oauth2/authorization/kakao';
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
