import styled from 'styled-components';

export const TodayMungWrapper = styled.div`
  display: flex;
  padding: 10px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  border-bottom: 1.5px solid #f0f0f0;
`;

export const TodayMungInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  background-color: pink;
  border-radius: 50%;
`;

export const WriterName = styled.div`
  color: #080808;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 114.286% */

  display: flex;
  align-items: center;
`;

export const CreatedAt = styled.div`
  color: #a7a7a7;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
`;

export const TodayMungTitleContentImageWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
export const TodayMungTitleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  color: #080808;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
  width: 260px;
  padding: 10px 5px;
  box-sizing: border-box;
`;
export const Content = styled.div`
  color: #080808;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */

  width: 260px;
  height: 60px;
  padding: 5px;
  box-sizing: border-box;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-break: break-all;
`;
export const Image = styled.div`
  width: 90px;
  height: 100px;
  border-radius: 10px;
  background-color: yellow;
`;
