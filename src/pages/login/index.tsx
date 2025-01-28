import { S } from './styles/login.styles';
import KakaoLoginButton from './components/KakaoLoginButton';
import ReactGA from 'react-ga4';
import SEO from '@/common/components/SEO';

function Login() {
  const handleBack = () => {
    window.location.href = '/';
    ReactGA.event({
      category: 'User',
      action: 'Click Later Sign Up',
      label: 'User clicked on "나중에 가입할래요"',
    });
  };
  return (
    <S.Wrapper>
      <SEO title={'로그인' + ' | 놀멍'} />
      <S.BackgroundImg>
        <S.ObjectContainer>
          <S.NolmungText aria-label="놀멍 로그인 슬로건: 내 반려견과의 즐거운 오늘을 기록하다">
            내 반려견과의
            <br />
            즐거운 오늘을 기록하다
          </S.NolmungText>
          <S.StyledLogo />
          <S.ButtonWrapper aria-label="카카오 로그인 버튼">
            <KakaoLoginButton />
            <S.LoginText
              aria-label="나중에 가입할래요 버튼"
              onClick={handleBack}
            >
              나중에 가입할래요
            </S.LoginText>
          </S.ButtonWrapper>
        </S.ObjectContainer>
      </S.BackgroundImg>
    </S.Wrapper>
  );
}

export default Login;
