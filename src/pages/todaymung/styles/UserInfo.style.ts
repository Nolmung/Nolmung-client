import styled from 'styled-components';

export const S = {
  Wrapper: styled.div`
    width: 100%;
    min-height: calc(100dvh - 162px);
  `,
  ProfileArea: styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 22px 12px;
    width: 100%;
    @media (min-height: 800px) {
      padding: 45px 22px;
    }
  `,
  ProfileDescription: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 5px;
    justify-content: center;
  `,
  NameWrapper: styled.div`
    display: flex;
    width: 100%;
    padding: 10px 0;
    align-items: center;
    border-bottom: 1.5px solid #F0F0F0;
  `,
  ProfileName: styled.h1`
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 1px;
  `,
  ProfileTitle: styled.h1`
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.5px;
  `,
  ImageWrapper: styled.div`
    display: flex;
    gap: 2px;
  `,
  ContentContainer: styled.div`
    display: flex;
    gap: 9px;
    margin-top: 22px;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    border-radius: 15px;
    border: 1px solid #d9d9d9;
    background: #f4f4f4;
    width: 100%;
    height: 81px;
  `,
  ContentTitle: styled.h2`
    font-size: 13px;
    font-weight: 400;
    color: #5e5e5e;
    display: flex;
  `,
  ContentNumber: styled.h3`
    font-size: 17px;
    font-weight: 500;
    color: #17aa1a;
    display: flex;
    justify-content: flex-end;
  `,
  Button: styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    height: 24px;
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
