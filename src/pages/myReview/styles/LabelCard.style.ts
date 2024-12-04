import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    border-radius: 10px;
    border: 1px solid #17aa1a;
    background: #d3fbd4;
    padding: 0px 14px;
    height: 38px;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 9px;
  `,

  Label: styled.span`
    color: #080808;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
    flex-shrink: 0;
    white-space: nowrap;
  `,
};

export default S;
