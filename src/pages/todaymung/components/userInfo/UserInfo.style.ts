import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    min-height: calc(100vh - 162px);
  `,
  ProfileArea: styled.div`
    display: flex;
    padding: 30px 22px;
    width: 100%;
    gap: 22px;
    @media (min-height: 800px) {
      padding: 45px 22px;
    }
  `,
  ProfileImg: styled.img``,
  ProfileDescription: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 5px;
    justify-content: center;
  `,
  ProfileName: styled.div`
    font-size: 18px;
    font-weight: 600;
  `,
  ProfileSubTextArea: styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
  `,
  TodayMungLength: styled.div`
    color: #17aa1a;
    background: #d3fbd4;
    padding: 5px 9px;
    border: 1px solid #17aa1a;
    font-weight: 500;
    border-radius: 8px;
  `,
  TodayMungLengthDescription: styled.div`
    color: #5e5e5e;
  `,
};
