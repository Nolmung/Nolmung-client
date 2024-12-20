import styled from 'styled-components';

const S = {
  FilterWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
    overflow-x: auto;
    height: 80px;
    position: sticky;
    justify-content: center;
    padding: 3px 22px;
  `,
  FilterMenu: styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    margin-right: 70px;
  `,
  StyledButton: styled.button<{ isActive: boolean }>`
    height: 28px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 50px;
    white-space: nowrap;
    padding: 0 11px;
    margin-right: 6px;
    color: ${({ isActive }) => (isActive ? '#080808' : '#a7a7a7')};
    border: ${({ isActive }) =>
      isActive ? '1px solid #a7a7a7' : '1px solid #D9D9D9'};
    background-color: ${({ isActive }) => (isActive ? '#F0F0F0' : '#FDFDFD')};
  `,
  FilterText: styled.div`
    width: 70px;
    flex-shrink: 0;
    color: #5e5e5e;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: left;
  `,
};

export default S;
