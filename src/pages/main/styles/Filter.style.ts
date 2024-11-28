import styled from 'styled-components';

const S = {
  FilterWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 0 22px;
  `,
  FilterMenu: styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    gap: 6px;
  `,
  StyledButton: styled.button<{ isActive: boolean }>`
    height: 28px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 50px;
    padding: 0 11px;
    color: ${({ isActive }) => (isActive ? '#080808' : '#a7a7a7')};
    border: ${({ isActive }) =>
      isActive ? '1px solid #a7a7a7' : '1px solid #D9D9D9'};
    background-color: ${({ isActive }) => (isActive ? '#F0F0F0' : '#FDFDFD')};
  `,
  FilterText: styled.div`
    width: 70px;
    color: #5e5e5e;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: left;
  `,
};

export default S;
