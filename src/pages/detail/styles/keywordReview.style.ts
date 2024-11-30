import styled from 'styled-components';

export const S = {
  KeywordReviewWrapper: styled.div`
    width: 100%;
    height: 42px;
    border-radius: 10px;
    background: #f0f0f0;

    color: #a7a7a7;
     
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 114.286% */
    box-sizing: border-box;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  KeywordReviewStatusBar: styled.div<{ width: number }>`
    display: flex;
    gap: 10px;
    border-radius: 10px;
    width: ${({ width }) => width}%;
    height: 42px;
    background-color: #d3fbd4;

    padding: 14px 17px;
    box-sizing: border-box;
    white-space: nowrap;
  `,
  KeywordContent: styled.div`
    color: #080808;
     
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
    border-radius: 10px;
    position: absolute;
    left: 10px;
    justify-content: center;
    gap: 10px;
    display: flex;
  `,
  KeywordContentBarWrapper: styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
  `,
};
