import styled from 'styled-components';

const S = {
  UserInfoInput: styled.input<{ isDropdownVisible?: boolean }>`
    box-sizing: border-box;
    margin-top: 8px;
    color: #080808;
    width: 70%;
    height: 50px;
    border: 1px solid #d9d9d9;
    padding-left: 10px;
    font-size: 16px;
    border-radius: ${({ isDropdownVisible }) =>
      isDropdownVisible ? '10px 10px 0 0' : '10px'};
    &::placeholder {
      color: #a7a7a7;
      font-size: 16px;
    }
    &:hover {
      border-color: #a7a7a7;
    }
    &:focus {
      border-color: #a7a7a7;
    }
  `,

  Button: styled.div`
    margin-top: 8px;
    margin-left: 10px;
    height: 44px;
    width: 26%;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    background-color: #5e5e5e;
    color: #ffffff;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.5s ease;
    white-space: nowrap;
  `,
};

export default S;
