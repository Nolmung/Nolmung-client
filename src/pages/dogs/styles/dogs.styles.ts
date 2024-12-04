import styled from 'styled-components';
import { CameraIcon } from '@/assets/images/svgs';

export const S = {
  ContainerWrapper: styled.div`
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 40px;
    width: 100%;
  `,
  StyledCameraIcon: styled(CameraIcon)`
    width: 24px;
    height: 24px;
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

  DogPicture: styled.div`
    position: relative; /* 필요한 경우 absolute로 변경 가능 */
    left: 50%; /* 부모의 왼쪽 기준으로 50% 이동 */
    transform: translateX(-50%); /* 자신의 너비의 절반만큼 왼쪽으로 이동 */
    cursor: pointer;
    margin-top: 50px;
    width: 86px;
    height: 86px;
    background-color: #f0f0f0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      transition: 0.5s ease;
      background-color: #d9d9d9;
    }
  `,
  HiddenInput: styled.input`
    display: none;
  `,

  PreviewImage: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  `,
  ContentTitleText: styled.h3`
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
    width: ${({ name }) => (name === 'birth' ? '47%' : '100%')};
    &::placeholder {
      color: #a7a7a7;
    }
  `,
  InputWrapper: styled.div`
    display: flex;
    align-items: center; /* 세로 중앙 정렬 */
    gap: 14px; /* 요소 간 간격 */
  `,

  BirthText: styled.h5`
    color: #080808;
    line-height: 1.2;
    font-size: 16px;
    margin-top: 8px;
  `,

  AgeChoiceContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3개의 동일한 열 */
    justify-items: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
  `,
  AgeChoice: styled.div<{ isSelected: boolean }>`
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
    font-size: 24px;
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
};
