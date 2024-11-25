import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header<{ isScrolled: boolean }>`
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
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  gap: 15px;
`;

export const PlaceImage = styled.img`
  width: 100%;
  height: 60%;
  max-height: 250px;
  object-fit: cover;
`;

export const GradientImage = styled.div`
  width: 100%;
  height: 5%;
  z-index: 1;
  position: absolute;
  top: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
`;

export const PlaceInfo = styled.section``;

export const PlaceDetailInfo = styled.section``;

export const PlaceBasicInfo = styled.div`
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 20px 16px 20px;
`;

export const PlaceName = styled.h1`
  color: #080808;
  text-align: center;
  font-family: Pretendard;
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
`;
export const PlaceBriefReview = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding: 10px 2px;
  box-sizing: border-box;
`;
export const StarAverage = styled.div`
  color: #080808;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 88.889% */
`;
export const PlaceReviewCount = styled.div`
  color: #5e5e5e;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
  margin-left: 6px;
`;
export const PlaceRoadAddress = styled.div`
  color: #5e5e5e;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
  padding: 10px 2px;
`;
export const PlaceInfoIcons = styled.div`
  display: flex;
  padding: 10px 2px;
  gap: 26px;
`;

export const InfoIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  color: #5e5e5e;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 100% */
`;
