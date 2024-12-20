import { BOTTOM_NAV_HEIGHT } from '@/common/constants/ui';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: calc(100dvh - ${BOTTOM_NAV_HEIGHT}px);
    padding: 0 0 0 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  `,

  BlurWrapper: styled.div`
    width: 100%;
  `,

  PositionRelative: styled.div`
    position: relative;
  `,

  LoginModalWrapper: styled.div`
    position: absolute;
    height: 100%;
    padding-top: 100px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-right: 22px;
  `,
  LoginModal: styled.div`
    position: sticky;
    padding-right: 22px;
    top: 50%;
    z-index: 100;
    width: 330px;
    height: 170px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px 16px 15px 16px;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  `,
  LoginModalText: styled.p`
    line-height: 1.2;
    font-size: 18px;
    font-weight: 500;
    flex-direction: row;
    & p {
      font-size: 18px;
      font-weight: 600;
    }
  `,

  LoginTextWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,
  LoginEmphasisText: styled.p`
    font-size: 18px;
    font-weight: 600;
  `,
};

export default S;
