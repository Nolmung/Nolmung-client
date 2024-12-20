import {
  BOTTOM_NAV_HEIGHT,
  HEADER_HEIGHT,
} from './../../../common/constants/ui';
import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 23px 22px;
    width: 100%;
    gap: 22px;
    height: calc(100dvh - ${HEADER_HEIGHT + BOTTOM_NAV_HEIGHT}px);
    overflow-y: auto;
    padding-bottom: 30px;
  `,
  ButtonArea: styled.button`
    display: flex;
    bottom: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 16px;
    color: #080808;
    @media (min-height: 850px) {
      font-size: 16px;
    }
    gap: 6px;
    font-weight: 500;
    padding: 14px 0px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    background-color: #f0f0f0;
  `,
  NoDataText: styled.span`
    color: #080808;
    line-height: 19.09px;
  `,
};
