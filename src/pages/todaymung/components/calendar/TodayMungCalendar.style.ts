import { styled } from '@mui/material/styles';
import { DateCalendar, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

export const CustomCalendarHeaderRoot = styled('div')({
  display: 'flex',
  // justifyContent: 'space-between',
  justifyContent: 'center',
  padding: '0px 16px',
  fontSize: '18px',
  fontWeight: '800',
  alignItems: 'center',

  '@media (min-height: 800px)': {
    padding: '8px 16px',
  },
});

export const StyledDateCalendar = styled(DateCalendar)`
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;

  .MuiDayCalendarHeader-root {
    display: flex;
    justify-content: space-between; /* 요일 라벨이 균등하게 배치되도록 설정 */
    align-items: center; /* 세로 정렬을 중앙으로 */
  }
  .MuiDayCalendar-weekDayLabel {
    width: calc((100%) / 7);
    text-align: center;
  }

  .MuiDayCalendarHeader-label {
    flex: 1; /* 요일 칸 크기를 날짜와 동일하게 설정 */
    text-align: center;
    margin: 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .MuiDayCalendar-weekContainer {
    display: flex;
    justify-content: space-between; /* 날짜 셀이 요일과 정렬되도록 설정 */
    align-items: center;
  }
  s .MuiDayCalendar-slideTransition {
    min-height: auto;
  }
` as typeof DateCalendar<Dayjs>;

export const CustomPickersDay = styled(PickersDay)<PickersDayProps<Dayjs>>(() => ({
  flex: '1 0 12%',
  boxSizing: 'border-box',
  margin: '2px',
  fontSize: '16px',
  height: '40px',
}));
