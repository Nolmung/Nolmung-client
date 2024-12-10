import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function KakaoCallbackHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKakaoCallback = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        if (!id) {
          alert('카카오 로그인 실패: 인증 코드가 없습니다.');
          return;
        }

        const response = await axios.get(
          `https://dev.nolmung.org/v1/oauth/kakao/login?id=${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        if (response.data.data) {
          localStorage.setItem(
            'accessToken',
            'Bearer ' + response.data.data.accessToken,
          );
        }

        const { loginStatus, id: userId, email, role } = response.data.data;

        if (loginStatus === 'LOGIN_SUCCESS' && role === 'USER') {
          navigate('/');
        } else if (loginStatus === 'SIGN_UP_REQUIRED' && role === 'GUEST') {
          navigate('/signUp', { state: { userId, email, loginStatus, role } });
        } else {
          alert('알 수 없는 상태입니다.');
          navigate('/login');
        }
      } catch (error) {
        console.error('카카오 로그인 처리 중 오류:', error);
        alert('로그인 처리 중 문제가 발생했습니다.');
        navigate('/login');
      }
    };

    handleKakaoCallback();
  }, [navigate]);

  return <div></div>;
}

export default KakaoCallbackHandler;
