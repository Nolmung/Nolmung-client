import styled from 'styled-components';
import { NolmungLogo } from '@/assets/images/svgs';

export const S = {
  ObjectContainer: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `,

  StyledLogo: styled(NolmungLogo)`
    width: 126px;
    height: 90px;
    align-items: center;
    margin-top: 24px;
  `,

  NolmungText: styled.h1`
    text-align: center;
    margin: auto;
    font-size: 14px;
    margin-top: 292px;
  `,

  KaKaoButton: styled.button`
    all: unset;
    margin-top: 236px;
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
    background-image: url('/svgs/LoginBackgroundimg.png');
    background-repeat: no-repeat;
    background-size: 100%;
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
