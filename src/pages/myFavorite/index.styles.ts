import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100%;
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  CategoryWrapper: styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    overflow-x: scroll;
    height: fit-content;
    padding: 0 28px 0;
  `,
  CategoryContainer: styled.div<{ isActive: boolean }>`
    padding: 10px 0;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    cursor: pointer;
    padding: 2px 2px 4px 2px;
    border-bottom: ${({ isActive }) => (isActive ? '2px solid #000' : 'none')};
    white-space: nowrap;
  `,
  PlaceWrapper: styled.div`
    padding: 0 28px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
    height: 100dvh;
    overflow-y: scroll;
    padding-bottom: 280px;
  `,
  PlaceCard: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    height: fit-content;
    width: 100%;
  `,
  ImageWrapper: styled.div`
    position: relative;
    height: 100%;
    border-radius: 5px;
    box-sizing: border-box;
  `,
  PlaceImage: styled.img`
    width: 115px;
    height: 146px;
    object-fit: cover;
    box-sizing: border-box;
    display: block;
  `,
  Like: styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 10;
    cursor: pointer;
  `,
  PlaceInfo: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    margin-top: 6px;
  `,
  PlaceLocation: styled.span`
    font-size: 12px;
    font-weight: 300;
    color: #000;
  `,
  PlaceName: styled.span`
    font-size: 16px;
    font-weight: 700;
    color: #000;
    margin-top: 8px;
  `,
  ReviewWrapper: styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
  `,
  StarRating: styled.span`
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.08px;
    color: #000;
    margin-left: 4px;
    margin-right: 10px;
  `,
  ReviewCount: styled.span`
    color: #7d7d7d;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
  `,
};

export default S;
