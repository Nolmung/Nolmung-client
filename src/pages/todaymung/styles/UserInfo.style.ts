import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    min-height: calc(100dvh - 162px);
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
  ProfileImg: styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
  `,
  ProfileDescription: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 5px;
    justify-content: center;
  `,
  NameWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 8px
  `,
  ProfileName: styled.div`
    font-size: 18px;
    font-weight: 600;
  `,
  ImageWrapper: styled.div`
    display: flex;
    gap: 2px;
  `,
  Button: styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  `,
  Image: styled.img`
    width: 19px;
    height: 24px;
    object-fit: contain;
    border: none;
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
  ModalContent: styled.div`
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  Title: styled.h2`
    font-size: 18px;
    font-weight: 600;
    font-family: 'GoryeongStrawberry', sans-serif;
  `,
  Main: styled.p`
    font-size: 14px;
    font-weight: 400;
    white-space: pre-wrap;
  `,
};
