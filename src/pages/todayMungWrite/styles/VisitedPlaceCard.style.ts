import styled from 'styled-components';

const S = {
  PlaceCard: styled.div`
    border-radius: 10px;
    border: 1px solid #a7a7a7;
    background: #f0f0f0;
    height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 14px;
    gap: 9px;
    min-width: 120px;
  `,
  PlaceTitleRateWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  PlaceTitle: styled.div`
    color: #080808;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  PlaceAddress: styled.div`
    color: #5e5e5e;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
  PlaceAverageRate: styled.div`
    color: #080808;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.6px;
    display: flex;
    gap: 4px;
  `,
};

export default S;
