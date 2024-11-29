import styled from 'styled-components';

export const S = {
  TodayMungWrapper: styled.div`
    display: flex;
    padding: 15px 0px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-bottom: 1.5px solid #f0f0f0;
  `,
  TodayMungInfo: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  ProfileWrapper: styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `,
  ProfileImage: styled.img`
    width: 30px;
    height: 30px;
    object-fit: cover;
    background-color: pink;
    border-radius: 50%;
  `,
  WriterName: styled.div`
    color: #080808;
    text-align: center;
     
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 114.286% */
    display: flex;
    align-items: center;
  `,
  CreatedAt: styled.div`
    color: #a7a7a7;
    text-align: center;
     
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
  `,
  TodayMungTitleContentImageWrapper: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    @media (max-width: 270px) {
      flex-direction: column-reverse;
      gap: 20px;
    }
  `,
  TodayMungTitleContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
  `,
  Title: styled.div`
    color: #080808;
     
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 125% */
    width: 90%;
    padding: 10px 5px;
    box-sizing: border-box;

    @media (max-width: 270px) {
      width: 100%;
    }
  `,
  Content: styled.div`
    color: #080808;
     
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 166.667% */
    width: 90%;
    height: 60px;
    padding: 5px;
    box-sizing: border-box;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-break: break-all;

    @media (max-width: 270px) {
      width: 100%;
    }
  `,
  Image: styled.img`
    width: 90px;
    height: 100px;
    border-radius: 10px;
    background-color: yellow;
  `,
};
