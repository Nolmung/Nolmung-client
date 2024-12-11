import styled from 'styled-components';
import { NolmungLogo } from '@/assets/images/svgs';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    overflow-y: hidden;
  `,
  ObjectContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  `,

  StyledLogo: styled(NolmungLogo)`
    width: 90px;
    height: 64px;
    align-items: center;
    margin-top: 26px;
  `,

  NolmungText: styled.h1`
    text-align: center;
    margin: 52% auto 0;  
    font-size: 14px;
    line-height: 1.3;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 423px;
    position: fixed;
    bottom: 6%;
  `,
  KaKaoButton: styled.button`
    all: unset;
    width: 90%;
    height: 60px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    background-color: #fae100;
    border-radius: 50px;
    cursor: pointer;
  `,

  BackgroundImg: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    background-color: red;
    background-image: url('/pngs/LoginBackgroundimg.png');
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 400px) { /* 화면 너비가 400px 이하일 때 */
    background-position: center -80px;
  }
  `,

  LoginText: styled.h2`
    color: #a7a7a7;
    text-align: center;
    cursor: pointer;
    margin-top: 18px;
    font-size: 14px;
    border-bottom: 1px solid #a7a7a7;
    &:hover {
      color: #080808; // 호버 시 색상 변경
    }
  `,
};
