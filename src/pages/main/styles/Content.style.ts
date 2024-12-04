import styled from 'styled-components';

export const S = {
  Wrapper: styled.div<{ isCard: boolean }>`
    width: 100%;
    height: ${({ isCard }) => (isCard ? '180px' : '152px')};

    padding: ${({ isCard }) => (isCard ? '0 16px' : '16px 16px')};
    background-color: #fff;
    border-radius: ${({ isCard }) => (isCard ? '20px 20px 0 0' : '0')};
    align-items: center;
    border-bottom: ${({ isCard }) => (isCard ? 'none' : '1.5px solid #f0f0f0')};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
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
    width: 80%;
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
  Like: styled.div`
    width: fit-content;
  `,
  InfoTextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
  `,
  PlaceImage: styled.img`
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 10px;
    object-fit: contain;
  `,
};
