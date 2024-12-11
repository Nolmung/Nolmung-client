import { styled } from 'styled-components';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100vh;
    padding-bottom: 90px;
    overflow-y: scroll;
  `,
  Header: styled.header<{ isScrolled: boolean }>`
    width: 100%;
    height: 70px;
    align-items: center;
    display: flex;
    padding: 0 20px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    z-index: 2;
    transition: all 0.3s ease-in-out;
    border-bottom: ${({ isScrolled }) =>
      isScrolled ? ' 1.5px solid #f0f0f0;' : 'none'};

    color: ${({ isScrolled }) => (isScrolled ? '#080808' : '#fff')};
    background-color: ${({ isScrolled }) =>
      isScrolled ? '#fff' : 'transparent'};
    box-shadow: ${({ isScrolled }) =>
      isScrolled ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none'};

    color: #080808;

    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    gap: 15px;
    max-width: 425px;
  `,

  TitleWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 22px;
  `,

  PlaceImage: styled.img`
    width: 100%;
    height: 60%;
    max-height: 250px;
    object-fit: cover;
  `,

  GradientImage: styled.div`
    width: 100%;
    height: 5%;
    z-index: 1;
    position: absolute;
    top: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
    max-width: 425px;
  `,
  IconWrapper: styled.div``,
  PlaceInfo: styled.div`
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    padding: 0 20px 16px 20px;
    box-sizing: border-box;
  `,

  PlaceName: styled.h1`
    color: #080808;
    text-align: center;

    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 72.727% */
    display: flex;
    width: 100%;
    height: 60px;
    padding: 16px 2px;
    box-sizing: border-box;
    align-items: flex-end;
    flex-shrink: 0;
    margin: 0;
  `,
  PlaceBriefReview: styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    padding: 10px 2px;
    box-sizing: border-box;
  `,
  StarAverage: styled.div`
    color: #080808;
    text-align: center;

    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 88.889% */
  `,
  PlaceReviewCount: styled.div`
    color: #5e5e5e;
    text-align: center;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
    margin-left: 6px;
  `,
  PlaceRoadAddress: styled.div`
    color: #5e5e5e;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
    padding: 10px 2px;
  `,
  PlaceInfoIcons: styled.div`
    display: flex;
    padding: 10px 2px;
    gap: 26px;
    width: 100%;
    overflow-x: auto;
  `,

  InfoIconWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    color: #5e5e5e;
    text-align: center;

    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 12px; /* 100% */
  `,

  PlaceDetailWrapper: styled.div`
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    padding: 20px;
    gap: 20px;
    color: #080808;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 100% */
    box-sizing: border-box;
  `,

  PlaceDetail: styled.div`
    padding: 5px 0;
    box-sizing: border-box;
    display: flex;
    gap: 10px;
  `,

  PlaceDetailMenu: styled.div`
    color: #5e5e5e;
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 100% */
  `,

  PhoneNumberLink: styled.a`
    text-decoration: none;
    color: #080808;
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 100% */
  `,

  ReviewTitle: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 10px 2px;
    color: #080808;
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 100% */
  `,

  ReviewCount: styled.div`
    color: #a7a7a7;
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 100% */
  `,

  KeywordReviews: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 12px;
  `,
  ViewMoreButtonWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  ViewMoreButton: styled.button`
    background-color: #f0f0f0;
    border: none;
    text-align: center;
    justify-content: center;
    margin-top: 16px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 10px;
  `,
};
