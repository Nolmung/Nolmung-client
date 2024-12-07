import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    border-radius: 15px;
    border: 1px solid #d9d9d9;
    height: 225px;
    margin-top: 30px;
    padding: 16px 20px;
    @media (min-height: 850px) {
      height: calc(100dvh - 570px);
    }
  `,
  Title: styled.div`
    padding-bottom: 9px;
    border-bottom: 1.5px solid #f0f0f0;
    font-size: 16px;
    font-weight: 500;
  `,
  Content: styled.div`
    height: 125px;
    margin-top: 17px;
    padding-right: 5px;
    font-size: 14px;
    font-weight: 500;
    color: #5e5e5e;
    line-height: 22px;
    overflow: scroll;
    @media (min-height: 850px) {
      height: calc(100dvh - 670px);
    }
  `,
  ContentLength: styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #a7a7a7;
    line-height: 19.09px;
    text-align: right;
    margin-top: 10px;
  `,
};

// 90+70+60.29+60.38+60.39

400;