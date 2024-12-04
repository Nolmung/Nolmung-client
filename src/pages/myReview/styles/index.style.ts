import { HEADER_HEIGHT } from '@/common/constants/ui';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: calc(100vh - ${HEADER_HEIGHT}px);
    overflow-y: scroll;
  `,
  ModalContent: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding-top: 35px;
    padding-bottom: 15px;
    box-sizing: border-box;
    border-radius: 12px;
    color: #343434;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 157%;
  `,
  ModalButtonWrapper: styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `,
};
export default S;
