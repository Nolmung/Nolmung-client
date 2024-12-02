import { HEADER_HEIGHT, BOTTOM_NAV_HEIGHT } from '@/common/constants/ui';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: calc(100vh - ${HEADER_HEIGHT}px - ${BOTTOM_NAV_HEIGHT}px);
    padding: 22px 0 16px 0;
    overflow-y: auto;
  `,
  SearchInputWrapper: styled.div`
    width: 100%;
    padding: 0 22px;
    margin-bottom: 22px;
  `,
};

export default S;
