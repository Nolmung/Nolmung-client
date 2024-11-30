import { BOTTOM_NAV_HEIGHT, HEADER_HEIGHT } from '@/common/constants/ui';
import styled from 'styled-components';

const S = {
  BannerWrapper: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 72px;
    background-color: #9ef99f;
  `,
  BannerImage: styled.img`
    width: 85%;
    object-fit: cover;
    position: absolute;
    top: 12px;
  `,
  Wrapper: styled.div`
    width: 100%;
    padding: 0 22px;
    height: calc(100% - ${HEADER_HEIGHT + BOTTOM_NAV_HEIGHT}px);
    overflow-y: auto;
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
};

export default S;
