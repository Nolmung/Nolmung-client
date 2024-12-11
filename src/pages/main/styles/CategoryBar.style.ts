import { styled } from 'styled-components';

const S = {
  Wrapper: styled.div`
    z-index: 1;
    width: 100%;
    height: fit-content;
    position: absolute;
    top: 29px;
    left: 5%;
  `,

  CategoryWrapper: styled.div`
    width: 100%;
    height: fit-content;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 42px 10px 0;
    gap: 8px;
    overflow-x: auto;
    max-width: 423px;
  `,

  StyledButtonWrapper: styled.div<{ isActive?: boolean }>`
    button {
      background-color: ${({ isActive }) => (isActive ? '#D3FBD4' : '#fff')};
      border: ${({ isActive }) => (isActive ? '1px solid #17AA1A' : 'none')};
      /* box-shadow: ${({ isActive }) =>
        isActive ? '0px 4px 8px 0px rgba(0, 0, 0, 0.10)' : 'none'}; */
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
      flex-shrink: 0;
      white-space: nowrap;
      display: flex;
      padding: 10px 14px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  `,

  ButtonContentWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
    width: fit-content;
  `,
};

export default S;
