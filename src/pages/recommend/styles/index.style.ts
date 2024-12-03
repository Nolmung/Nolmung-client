import { BOTTOM_NAV_HEIGHT } from '@/common/constants/ui';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: calc(100vh - ${BOTTOM_NAV_HEIGHT}px);
    padding: 0 22px;
    gap: 153px;
    overflow-y: auto;
  `,
};

export default S;
