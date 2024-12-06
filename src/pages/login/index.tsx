import { S } from './styles/login.styles';
import { useNavigate } from 'react-router-dom';
import KakaoLoginButton from './components/KakaoLoginButton';

function Login() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  return (
    <>
      <S.BackgroundImg>
        <S.ObjectContainer>
          <S.NolmungText>
            내 반려견과의
            <br />
            즐거운 오늘을 기록하다
          </S.NolmungText>
          <S.StyledLogo />
          <KakaoLoginButton />
          <S.LoginText onClick={handleBack}>나중에 가입할래요</S.LoginText>
        </S.ObjectContainer>
      </S.BackgroundImg>
    </>
  );
}

export default Login;
