import styled from 'styled-components';

export const S = {
  ContainerWrapper: styled.div`
    margin-left: 30px;
    margin-right: 30px;
  `,
  UserTitle: styled.h1`
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 75px;
  `,
  DescriptionText: styled.h2`
    color: #a7a7a7;
    line-height: 1.2;
    font-size: 13px;
    margin-top: 16px;
    margin-bottom: 53px;
  `,
  ContentTitleText: styled.h3`
    color: #080808;
    font-weight: 600;
    line-height: 1.2;
    font-size: 14px;
    margin-top: 30px;
  `,
  UserInfoInput: styled.input`
    margin-top: 8px;
    width: 100%;
    height: 50px;
    border: 1px solid #d9d9d9;
    padding-left: 18px;
    border-radius: 10px;
    font-size: 16px;
  `,
  AgeChoiceContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3개의 동일한 열 */
    justify-items: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
  `,
  AgeChoice: styled.div`
    margin-top: 18px;
    width: 93px;
    height: 93px;
    background-color: #fdfdfd;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #a7a7a7;
    &:hover {
      background-color: #d3fbd4;
      border: 1px solid #17aa1a;
      color: #17aa1a; // 호버 시 색상 변경
    }
  `,
  AgeChoiceText: styled.h4`
    color: #a7a7a7;
    line-height: 1.2;
    font-size: 13px;
    margin-top: 15px;
  `,
  AgeFlex: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  NextButton: styled.button`
    margin-top: 40px;
    width: 100%;
    height: 60px;
    border: 1px solid #a7a7a7;
    background-color: #f0f0f0;
    border-radius: 50px;
    font-size: 16px;
    &:hover {
      background-color: #080808;
      color: #ffffff; // 호버 시 색상 변경
    }
  `,
};
