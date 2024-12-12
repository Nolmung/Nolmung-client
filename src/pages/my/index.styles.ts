import { BOTTOM_NAV_HEIGHT, HEADER_HEIGHT } from '@/common/constants/ui';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    /* height: 100px; */
    height: calc(100vh - ${HEADER_HEIGHT + BOTTOM_NAV_HEIGHT}px);
    box-sizing: border-box;
    overflow-y: auto;
    padding-bottom: 30px;
  `,
  ProfileWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 22px;
    height: auto;
    width: 100%;
  `,
  MyProfileCard: styled.div`
    margin: 26px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;
    gap: 18px;
  `,
  ProfileImg: styled.img<{ width: number; height: number }>`
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    border-radius: 50%;
    object-fit: cover;
  `,
  ProfileTextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: fit-content;
  `,
  NameWrapper: styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
  `,
  ProfileName: styled.span`
    color: #000;
    font-size: 18px;
    font-weight: 500;
  `,
  ProfileEmailWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
  `,
  ProfileEmail: styled.span`
    color: #080808;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  KaKaoIconImg: styled.img`
    width: 16px;
    height: 16px;
  `,
  PetProfileWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    gap: 8px;
  `,
  PetProfilePlusButton: styled.button`
    all: unset;
    cursor: pointer;
    margin-bottom: 13px;
    font-size: 12px;
    font-weight: 500;
    color: #898989;
    margin-left: auto;
    &:hover {
      opacity: 0.8;
    }
  `,
  ListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;

    padding: 22px 0px;
  `,
  ListContainer: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 60px;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1.5px solid #f0f0f0;
    padding-left: 22px;
    cursor: pointer;
  `,
};

export default S;
