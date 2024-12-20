import styled from 'styled-components';

export const S = {
  HeaderWrapper: styled.div`
    width: 100%;
    height: 30px;
    border-radius: 26px 26px 0 0;
    display: flex;
    justify-content: center;
    align-items: baseline;
  `,

  Handle: styled.div`
    right: 0;
    justify-content: center;
    align-self: center;
    cursor: pointer;
    border-radius: 26px;
    background-color: #ededed;
    width: 50px;
    height: 4px;
  `,
};
