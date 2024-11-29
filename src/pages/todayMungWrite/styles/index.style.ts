import { BOTTOM_NAV_HEIGHT, HEADER_HEIGHT } from '@/common/constants/ui';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100%;
    padding: 0 22px;
    height: calc(100vh - ${HEADER_HEIGHT + BOTTOM_NAV_HEIGHT}px);
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,

  MenuWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Title: styled.div`
    color: #080808;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  PlaceWrapper: styled.div`
    display: flex;
    gap: 8px;
    margin-top: 8px;
    align-items: center;
  `,
  PlaceCardWrapper: styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    overflow-x: auto;
    align-items: center;
  `,
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
  PlaceAddButton: styled.button`
    border-radius: 10px;
    border: 1px solid #17aa1a;
    background: #d3fbd4;
    width: 59px;
    height: 64px;
    flex-shrink: 0;
  `,

  PetButtonWrapper: styled.div`
    display: flex;
    gap: 8px;
  `,

  PetButton: styled.button<{ selected: boolean }>`
    height: 42px;
    flex-shrink: 0;
    display: flex;
    gap: 6px;
    border-radius: 50px;
    align-items: center;
    padding-left: 6px;
    padding-right: 19px;
    justify-content: center;
    border: ${({ selected }) =>
      selected ? '1px solid #17aa1a' : '1px solid #D9D9D9'};
    background-color: ${({ selected }) => (selected ? '#D3FBD4' : ' #F0F0F0')};
  `,
  PetImage: styled.img`
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 50px;
  `,
  PetName: styled.div<{ selected: boolean }>`
    color: ${({ selected }) => (selected ? '#17AA1A' : '#5E5E5E')};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,

  TodayMungTitleInput: styled.input`
    height: 48px;
    color: #a7a7a7;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: #f0f0f0;
  `,
  TodayMungContentInput: styled.textarea`
    height: 237px;
  `,
  TodayMungTextCount: styled.div`
    color: #a7a7a7;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
};

export default S;
