import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    min-height: calc(100vh - 162px);
  `,
  ProfileArea: styled.div`
    display: flex;
    padding: 35px 22px;
    width: 100%;
    gap: 22px;
  `,
  ProfileImg: styled.img``,
  ProfileDescription: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
  `,
  ProfileName: styled.div`
    font-size: 14px;
    font-weight: 600;
  `,
  ProfileSubTextArea: styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
  `,
  TodayMungLength: styled.div`
    color: #17aa1a;
    background: #d3fbd4;
    padding: 5px 9px;
    border: 1px solid #17aa1a;
    border-radius: 8px;
  `,
  TodayMungLengthDescription: styled.div`
    color: #5e5e5e;
  `,
};
