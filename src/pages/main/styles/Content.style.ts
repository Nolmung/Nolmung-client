import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 152px;
    padding: 16px 32px;
    background-color: #fff;
    border-bottom: 1.5px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
  `,
  PlaceInfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  PlaceNameCategoryWrapper: styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
  `,
  PlaceReviewWrapper: styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
  `,
  PlaceName: styled.p`
    color: #080808;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  PlaceCategory: styled.p`
    color: #a7a7a7;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
  PlaceAddress: styled.p`
    color: #5e5e5e;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  PlaceStarAvgerage: styled.p`
    color: #080808;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.6px;
  `,
  PlaceReviewCount: styled.p`
    color: #5e5e5e;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
  IconWrapper: styled.div``,
  PlaceImage: styled.img`
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 10px;
    object-fit: contain;
  `,
};
