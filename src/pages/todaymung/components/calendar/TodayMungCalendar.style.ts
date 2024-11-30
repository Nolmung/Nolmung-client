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
  '@media (min-height: 800px)': {
    padding: '18px 16px',
  },
});

export const StyledDateCalendar = styled(DateCalendar)`
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  height: fit-content;
  max-height: none !important;
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
  }

  .MuiPickersSlideTransition-root {
    height: fit-content;
    min-height: 274px;
    overflow: visible;
  }

  .MuiDayCalendar-slideTransition {
    @media (min-height: 800px) {
      min-height: 335px;
    }
  }
` as typeof DateCalendar<Dayjs>;

export const CustomPickersDay = styled(PickersDay)<PickersDayProps<Dayjs>>(() => ({
  // flex: '1 0 12%',
  boxSizing: 'border-box',
  margin: '2px',
  fontSize: '16px',
  width: '41px',
  height: '40px',
  borderRadius: '50%',
  '@media (min-height: 800px)': {
    height: '50px',
  },
  '&.Mui-selected': {
    backgroundColor: '#17AA1A',
    color: '#ffffff',
  },
  '&.Mui-selected:hover': {
    backgroundColor: '#14a117',
  },
  '&.Mui-selected:focus': {
    backgroundColor: '#17AA1A',
  },
}));
