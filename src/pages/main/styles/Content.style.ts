import styled from 'styled-components';

export const S = {
  Wrapper: styled.div<{ isCard: boolean }>`
    width: 100%;
    height: ${({ isCard }) => (isCard ? '180px' : '152px')};

    padding: ${({ isCard }) => (isCard ? '0 28px' : '16px 28px')};
    background-color: #fff;
    border-radius: ${({ isCard }) => (isCard ? '20px 20px 0 0' : '0')};
    align-items: center;
    border-bottom: ${({ isCard }) => (isCard ? 'none' : '1.5px solid #f0f0f0')};
    display: flex;
    justify-content: space-between;
  `,
  Container: styled.div`
    width: 100%;
    height: fit-content;
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
    flex-wrap: wrap;
  `,
  PlaceReviewWrapper: styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
  `,
  TextWrapper: styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    color: #080808;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.6px;
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
  PlaceReviewCount: styled.p`
    color: #5e5e5e;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
  IconWrapper: styled.div``,
  Like: styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    cursor: pointer;
  `,
  InfoTextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
  `,
  PlaceImage: styled.img`
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    border-radius: 10px;
    object-fit: cover;
  `,
  ImageWrapper: styled.div`
    position: relative;
    height: 100%;
    border-radius: 5px;
    box-sizing: border-box;
  `,
};
