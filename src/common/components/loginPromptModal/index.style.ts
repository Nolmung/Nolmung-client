import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    padding: 36px 24px 0 24px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 10px;
    z-index: 10000;
    min-width: 400px;
    min-height: 400px;
  `,

  Title: styled.div`
    color: #080808;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  Explanation: styled.p`
    color: #a7a7a7;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
  IconWrapper: styled.div`
    width: 100%;
    height: 50%;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    justify-content: center;
  `,
  LoginPromptButtonWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  LoginPromptButton: styled.button`
    width: 80%;
    height: 48px;
    border-radius: 24px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    background-color: #17aa1a;
  `,
};
