import styled from 'styled-components';

export const S = {
  Wrapper: styled.div<{
    backgroundcolor?: string;
    width?: string;
    height?: string;
  }>`
    width: 100%;
    height: ${({ height }) => (height ? height : '100vh')};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ backgroundcolor }) =>
      backgroundcolor ? backgroundcolor : 'none'};
    z-index: 1000;
  `,
};
