import styled from 'styled-components';

export const S = {
  ModalBackground: styled.div`
    width: fit-content;
    &::before {
      content: '';
      position: absolute;
      top: -18%; 
      left: -6%;
      width: 95%; 
      height: 136%;
      background-image: url('/webps/event_todaymung.webp');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      z-index: -1;
    }
  `,
  ConfettiWrapper: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 423px;
    pointer-events: none; // 클릭 이벤트를 무시하여 모달의 이벤트가 발생되도록 함
  `,
  ModalContent: styled.div`
    width: fit-content;
    padding: 48px 40px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    @media (max-width: 320px) {
      padding: 36px 40px;
    }
  `,
  Title: styled.h2`
    font-size: 26px;
    font-weight: 600;
    font-family: 'GoryeongStrawberry', sans-serif;
    white-space: pre-wrap;
    @media (max-width: 320px) {
      font-size: 22px;
    }
  `,
  Main: styled.p`
    font-size: 16px;
    font-weight: 300;
    white-space: pre-wrap;
    color: #5e5e5e;
    line-height: 1.6;
    @media (max-width: 320px) {
      font-size: 13px;
    }
  `,
  ImageWrapper: styled.div`
    width: 92px;
    height: 122px;
  `,
};
