import styled from 'styled-components';

export const S = {
  InputWrapper: styled.div`
    width: 100vw;
    height: 52px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    background: #fdfdfd;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 15px;
    padding: 0 17px 0 23px;
  `,
  Wrapper: styled.input`
    flex: 9;
    border: none;
    height: 100%;

    color: #080808;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &:focus {
      outline: none;
    }
    &:placeholder {
      color: #a7a7a7;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `,
};
