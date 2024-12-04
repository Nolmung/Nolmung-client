import styled from 'styled-components';

export const S = {
  Wrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 20px;
    box-sizing: border-box;
    padding: 0px 30px;
    color: #080808;
    overflow-y: scroll;
  `,

  CalendarArea: styled.div`
    height: 100%;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    margin-top: 10px;
  `,

  TodaymungInsertButton: styled.button`
    display: flex;
    bottom: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 16px;
    color: #080808;
    @media (min-height: 850px) {
      font-size: 16px;
    }
    gap: 6px;
    font-weight: 500;
    padding: 14px 0px;
    border: 1px solid #17aa1a;
    border-radius: 10px;
    background-color: #d3fbd4;
    margin-top: auto;
  `,
  ButtonText: styled.span`
    line-height: 19.09px;
  `,
  DayText: styled.span<{ $hasMarker?: boolean }>`
    font-family: 'Pretendard';
    position: absolute;
    z-index: 3;
    font-size: 16px;
    color: ${({ $hasMarker }) => ($hasMarker ? '#ffffff' : '#0f0e0e')};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  `,

  MarkerWrapper: styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);

    &:hover {
      background-color: rgba(0, 0, 0, 0);
    }

    &:hover img {
      opacity: 1;
    }
    @media (min-height: 850px) {
      width: 51px;
      height: 50px;
    }
  `,

  MarkerOverlay: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    z-index: 1;
    transition: background-color 0.3s ease;
  `,

  MarkerImage: styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  `,
};
