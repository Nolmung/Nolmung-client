import { HEADER_HEIGHT } from '@/common/constants/ui';
import styled from 'styled-components';

export const S = {
  ContainerWrapper: styled.div`
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 40px;
    width: 100%;
    height: calc(100vh - ${HEADER_HEIGHT}px);
    overflow-y: auto;
  `,
  UserTitle: styled.h1`
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 50px;
  `,
  DescriptionText: styled.h2`
    color: #a7a7a7;
    line-height: 1.2;
    font-size: 13px;
    margin-top: 16px;
    margin-bottom: 50px;
  `,
  ContentTitleText: styled.h3`
    display: flex;
    color: #080808;
    font-weight: 600;
    line-height: 1.2;
    font-size: 14px;
    margin-top: 30px;
  `,
  UserInfoInput: styled.input<{ isDropdownVisible?: boolean }>`
    box-sizing: border-box;
    margin-top: 8px;
    color: #080808;
    width: 100%;
    height: 50px;
    border: 1px solid #d9d9d9;
    padding-left: 18px;
    font-size: 16px;
    border-radius: ${({ isDropdownVisible }) =>
      isDropdownVisible ? '10px 10px 0 0' : '10px'};
    &::placeholder {
      color: #a7a7a7;
      font-size: 14px;
    }
  `,

  AgeChoiceContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
  `,
  AgeChoice: styled.div<{ isSelected: boolean }>`
    cursor: pointer;
    margin-top: 10px;
    width: 93px;
    height: 93px;
    background-color: ${({ isSelected }) =>
      isSelected ? '#d3fbd4' : '#fdfdfd'};
    border: 1px solid
      ${({ isSelected }) => (isSelected ? '#17aa1a' : '#d9d9d9')};
    border-radius: 50%;
    color: ${({ isSelected }) => (isSelected ? '#17aa1a' : '#a7a7a7')};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    &:hover {
      transition: 0.5s ease;
      background-color: #d3fbd4;
      border: 1px solid #17aa1a;
      color: #17aa1a; // 호버 시 색상 변경
    }
  `,
  AgeChoiceText: styled.h4`
    color: #a7a7a7;
    line-height: 1.2;
    font-size: 13px;
    margin-top: 8px;
  `,
  AgeFlex: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  NextButton: styled.button`
    margin-top: 50px;
    width: 100%;
    height: 60px;
    border: 1px solid #a7a7a7;
    background-color: #f0f0f0;
    border-radius: 50px;
    font-size: 16px;
    &:hover {
      transition: 0.5s ease;
      background-color: #080808;
      color: #ffffff; // 호버 시 색상 변경
    }
  `,
  Dropdown: styled.ul`
    box-sizing: border-box;
    width: 100%;
    height: auto; /* 높이를 자동으로 조절하여 모든 항목이 보이도록 설정 */
    max-height: none; /* 최대 높이 제한 제거 */
    border: 1px solid #d9d9d9;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #fff;
    list-style-type: none;
    color: #080808;
    font-size: 16px;
  `,
  Suggestion: styled.li`
    width: 100%;
    padding: 18px;
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
    }
  `,
  ErrorMessage: styled.h5`
    font-size: 12px;
    color: #ff4e3e;
    margin-left: 10px;
    margin-top: 1px;
    font-weight: 500;
  `,
};
