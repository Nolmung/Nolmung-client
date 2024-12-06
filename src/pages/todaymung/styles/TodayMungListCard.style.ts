import styled from 'styled-components';

export const S = {
  Wrap: styled.div`
    width: 100%;
    padding: 22px;
    border-bottom: 1.5px solid #f0f0f0;
    cursor: pointer;
  `,
  UserInfoArea: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 36px;
    font-size: 14px;
  `,
  UserInfoTextArea: styled.div`
    display: flex;
    width: 100%;
    padding: 0px 10px;
    justify-content: space-between;
  `,
  ProfileImg: styled.img`
    width: 30px;
    height: 30px;
  `,
  UserName: styled.div`
    font-weight: 600;
    color: #080808;
  `,
  PostDate: styled.div`
    font-weight: 500;
    color: #a7a7a7;
  `,
  ContentArea: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  `,
  ContentTextArea: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ContentTitle: styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #080808;
    line-height: 20px;
    padding: 10px 2px;
  `,
  ContentDescription: styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #080808;
    line-height: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  ContentImgArea: styled.div`
    display: flex;
    align-items: center;
  `,
  ContentImg: styled.img`
    width: 90px;
    height: 100px;
    border-radius: 10px;
  `,
};
