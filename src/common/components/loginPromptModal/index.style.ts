import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    padding: 36px 24px 6px 24px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 10px;
    z-index: 10000;
    min-height: 400px;
  `,

  Title: styled.div`
    color: #080808;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  Explanation: styled.p`
    color: #a7a7a7;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: pre-wrap;
  `,
  IconWrapper: styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  LoginPromptButtonWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  LoginPromptButton: styled.button`
    width: 100%;
    height: 48px;
    border-radius: 12px;
    color: #17aa1a;
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid #17aa1a;
    background-color: #d3fbd4;
  `,
};
