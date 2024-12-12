import { HEADER_HEIGHT } from '@/common/constants/ui';
import { BOTTOM_NAV_HEIGHT } from '@/common/constants/ui';
import styled from 'styled-components';
import { DatepickerCalendar } from '@/assets/images/svgs';

export const S = {
  ContainerWrapper: styled.div`
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 40px;
    width: 100%;
    height: calc(100dvh - ${HEADER_HEIGHT + BOTTOM_NAV_HEIGHT}px);
    overflow-y: auto;
    overflow-x: hidden;
  `,
  DatepickerCalendarIcon: styled(DatepickerCalendar).withConfig({
    shouldForwardProp: (prop) => prop !== 'ownerState',
  })`
    width: 24px;
    height: 24px;
    padding: 1px;
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
    margin-top: 40px;
  `,
  UserInfoInput: styled.input<{ isDropdownVisible?: boolean }>`
    box-sizing: border-box;
    margin-top: 8px;
    color: #080808;
    width: 70%;
    height: 50px;
    border: 1px solid #d9d9d9;
    padding-left: 18px;
    font-size: 16px;
    border-radius: ${({ isDropdownVisible }) =>
      isDropdownVisible ? '10px 10px 0 0' : '10px'};
    &::placeholder {
      color: #a7a7a7;
      font-size: 16px;
    }
    &:hover {
      border-color: #a7a7a7;
    }
    &:focus {
      border-color: #a7a7a7;
    }
  `,
  AgeLabel: styled.label`
    font-size: 14px;
    font-weight: bold;
    color: #080808;
  `,

  AgeInput: styled.input`
    width: 100%;
    height: 46px;
    padding: 8px 12px;
    font-size: 16px;
    color: #080808;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    box-sizing: border-box;

    &:focus {
      border-color: #17aa1a;
      outline: none;
    }
  `,
  GenderSelect: styled.div<{ isSelected: boolean }>`
    margin-top: 8px;
    width: 100%;
    height: 50px;
    background-color: ${({ isSelected }) =>
      isSelected ? '#d3fbd4' : '#f0f0f0'};
    border: 1px solid
      ${({ isSelected }) => (isSelected ? '#17aa1a' : 'transparent')};
    color: ${({ isSelected }) => (isSelected ? '#17aa1a' : '#000')};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      border 0.3s ease,
      color 0.3s ease;

    &:hover {
      background-color: #d3fbd4;
      border: 1px solid #17aa1a;
      color: #17aa1a;
    }
  `,

  GenderWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 423px;
    justify-content: space-between;
  `,
  
  NextButton: styled.button<{ isActive: boolean }>`
    margin-top: 50px;
    width: 100%;
    height: 60px;
    border: 1px solid #a7a7a7;
    background-color: ${({ isActive }) => (isActive ? '#080808' : '#f0f0f0')};
    color: ${({ isActive }) => (isActive ? '#ffffff' : '#a7a7a7')};
    border-radius: 50px;
    font-size: 16px;
    transition: 0.5s ease;
  `,
  Dropdown: styled.ul`
    box-sizing: border-box;
    width: 100%;
    height: auto;
    max-height: none;
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
