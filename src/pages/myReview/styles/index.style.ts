import { HEADER_HEIGHT } from '@/common/constants/ui';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: calc(100% - ${HEADER_HEIGHT}px);
    overflow-y: scroll;
  `,
};
export default S;
