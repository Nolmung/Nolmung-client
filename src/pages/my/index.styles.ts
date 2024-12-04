import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    flex: 1;
    box-sizing: border-box;
    overflow-y: auto;
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
    gap: 6px;
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
    gap: 4px;
  `,
  ProfileEmail: styled.span`
    color: #000;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  KaKaoIconImg: styled.img`
    width: 10px;
    height: 10px;
  `,
  PetProfileWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    gap: 8px;
  `,
  ListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    
    background: #fdfdfd;
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