// import React, { useState } from 'react';
import * as S from './styles/login.styles';
import KakaoLoginButton from './components/KakaoLoginButton';

function Login() {
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
          <S.LoginText>나중에 가입할래요</S.LoginText>
        </S.ObjectContainer>
      </S.BackgroundImg>
    </>
  );
}

export default Login;
