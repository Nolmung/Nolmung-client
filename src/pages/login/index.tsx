import { S } from './styles/login.styles';
import { useNavigate } from 'react-router-dom';
import KakaoLoginButton from './components/KakaoLoginButton';

function Login() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <S.Wrapper>
      <S.BackgroundImg>
        <S.ObjectContainer>
            <S.NolmungText>
              내 반려견과의
              <br />
              즐거운 오늘을 기록하다
            </S.NolmungText>
            <S.StyledLogo />
          <S.ButtonWrapper>
            <KakaoLoginButton />
            <S.LoginText onClick={handleBack}>나중에 가입할래요</S.LoginText>
          </S.ButtonWrapper>
        </S.ObjectContainer>
      </S.BackgroundImg>
    </S.Wrapper>
  );
}

export default Login;
