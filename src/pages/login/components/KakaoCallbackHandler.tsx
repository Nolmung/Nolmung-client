import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function KakaoCallbackHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKakaoCallback = async () => {
      try {
        // 현재 URL에서 `id` 파라미터 추출
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        if (!id) {
          alert('카카오 로그인 실패: 인증 코드가 없습니다.');
          navigate('/login'); // 로그인 페이지로 리다이렉트
          return;
        }

        // 서버에 인증 코드 전달 및 응답 받기
        const response = await axios.get(
          `https://dev.nolmung.org/v1/oauth/kakao/login?id=${id}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        // 서버 응답 데이터
        const { loginStatus, email, role } = response.data.data;

        // 상태에 따라 이동
        if (loginStatus === 'LOGIN_SUCCESS' && role === 'USER') {
          navigate('/');
        } else if (loginStatus === 'SIGN_UP_REQUIRED' && role === 'GUEST') {
          navigate('/signUp', { state: { email } });
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
