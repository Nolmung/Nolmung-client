import { styled } from '@mui/material/styles';
import { DateCalendar, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import React from 'react';

export const CustomCalendarHeaderRoot = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 16px',
  alignItems: 'center',
});

export const StyledDateCalendar = styled(DateCalendar)`
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
  max-width: 600px;
  min-width: 320px;
  padding: 0px 22px;
  .MuiDayCalendar-weekDayLabel {
    width: calc((100% - 12px) / 7);
    text-align: center;
  }
` as typeof DateCalendar<Dayjs>;

export const CustomPickersDay = styled(PickersDay)<PickersDayProps<Dayjs>>(
  ({ theme }) => ({
    width: 'calc((100% - 12px) / 7)', // 기본 너비 설정
    height: '60px',
    boxSizing: 'border-box',
    margin: '2px',
    paddingBottom: 'calc((100% - 20px) / 7)', // 정사각형 비율 유지
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      width: 'calc((100% - 8px) / 7)',
      height: '30px', // 작은 화면에서 높이 조정
      margin: '1px',
    },
  }),
) as React.ComponentType<PickersDayProps<Dayjs>>;
