import { HEADER_HEIGHT, BOTTOM_NAV_HEIGHT } from '@/common/constants/ui';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div.attrs<{ addPadding: boolean }>(() => ({
    className: 'scroll-container',
  }))`
    width: 100%;
    height: calc(100vh - ${HEADER_HEIGHT}px - ${BOTTOM_NAV_HEIGHT}px);
    padding: 22px 0 100px 0;
    padding: ${({ addPadding }) => (addPadding ? '22px 0 100px 0' : '22px 0')};
    overflow-y: auto;
  `,
  SearchInputWrapper: styled.div`
    width: 100%;
    padding: 0 22px;
    margin-bottom: 22px;
  `,
  VisitedPlaceCard: styled.div`
    position: absolute;
    bottom: 90px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 0 16px;
    width: calc(100% - 32px);
    overflow-x: auto;
  `,
  IconWrapper: styled.div`
    position: absolute;
    right: -4px;
    top: 0;
    transform: translateY;
    z-index: 10;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid #a7a7a7;
    border-radius: 50%;
  `,
  CardWrapper: styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `,
};

export default S;
