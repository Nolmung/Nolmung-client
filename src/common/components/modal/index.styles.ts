import styled from 'styled-components';

export const S = {
  ModalWrapper: styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1500;
    max-width: 423px;
  `,

  ModalBackground: styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1500;
  `,

  ModalContent: styled.div<{ width?: string; height?: string }>`
    position: relative;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: ${({ width }) => (width ? width : '330px')};
    height: ${({ height }) => (height ? height : '160px')};
    z-index: 1500;
  `,
};
