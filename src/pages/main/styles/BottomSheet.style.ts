import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    transition: transform 400ms ease-out;
    overflow: hidden;
    max-width: 425px;
  `,
  OpenButton: styled.div`
    width: 96px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 18px;
    background: var(--Gray-Button-Text, #5d5d5d);
    z-index: 10;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 157%;
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    display: flex;
    z-index: 1;
    gap: 5px;
  `,
  BottomSheetContentWrapper: styled.div<{ refheight: number }>`
    width: 100%;
    height: ${(props) => props.refheight}px;
    overflow-y: scroll;
    background-color: white;
    z-index: 1;
    padding-bottom: 40px;
  `,
  BottomSheetContentRef: styled.div`
    width: 100%;
    height: fit-content;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  OpenButtonText: styled.p`
    padding-top: 3px;
  `,
  BottomSheetBody: styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 26px 26px 0 0;
    margin-top: 10px;
  `,
  BottomSheetContentCard: styled.div`
    width: 100%;
    height: 300px;

    background-color: aqua;
    border: 1px solid black;
  `,
};
