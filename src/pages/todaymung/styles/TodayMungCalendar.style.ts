import { styled } from '@mui/material/styles';
import { DateCalendar, PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

export const CustomCalendarHeaderRoot = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0px 16px',
  fontSize: '18px',
  fontWeight: '800',
  alignItems: 'center',
  '@media (min-height: 850px)': {
    padding: '0px 16px 18px 16px',
  },
});

export const StyledDateCalendar = styled(DateCalendar)`
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  height: fit-content;
  max-height: none !important;

  .hover-enabled:hover {
    opacity: 1;
  }

  .MuiPickersDay-today {
    width: 40px;
    height: 40px;
    background-color: #d9d9d9;
    border-radius: 30%;
    border: none !important;
  }

  .MuiDayCalendarHeader-root {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .MuiDayCalendarHeader-label {
    flex: 1;
    text-align: center;
    margin: 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .MuiDayCalendar-weekDayLabel {
    width: calc((100%) / 7);
    text-align: center;
  }

  .MuiDayCalendar-weekContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto !important;
    height: fit-content;
  }

  .MuiDayCalendar-monthContainer {
    overflow-y: auto; /* 세로 스크롤 활성화 */
  }

  .MuiPickersSlideTransition-root {
    /* height: calc(100dvh - 520px); */
    overflow: scroll;
    @media (max-height: 750px) {
      height: calc(100dvh - 520px);
    }
  }

  .MuiDayCalendar-slideTransition {
    @media (min-height: 850px) {
      min-height: 282px;
      height: 282px;
    }
  }
` as typeof DateCalendar<Dayjs>;

export const CustomPickersDay = styled(PickersDay)<PickersDayProps<Dayjs>>(
  () => ({
    boxSizing: 'border-box',
    margin: '2px',
    fontSize: '16px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    position: 'relative',
    '@media (min-height: 850px)': {
      width: '51px',
      height: '50px',
    },
    '&.Mui-selected': {
      backgroundColor: '#d9d9d9 !important',
      color: '#ffffff',
    },
    '&.Mui-selected:hover': {
      backgroundColor: '#d9d9d9 !important',
    },
    '&.Mui-selected:focus': {
      backgroundColor: '#d9d9d9 !important',
    },
    '&.hover-enabled:hover': {
      opacity: '1',
    },
    '&.hover-enabled': {
      pointerEvents: 'auto',
    },
    '&:not(.hover-enabled)': {
      pointerEvents: 'none',
    },
  }),
);
