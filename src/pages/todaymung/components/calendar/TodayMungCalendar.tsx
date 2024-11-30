import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { PickersDayProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersCalendarHeaderProps } from '@mui/x-date-pickers/PickersCalendarHeader';
import dayjs, { Dayjs } from 'dayjs';
import styled from 'styled-components';

import { markeDates } from './markDates';
import {
  CustomCalendarHeaderRoot,
  StyledDateCalendar,
  CustomPickersDay,
} from './TodayMungCalendar.style';

import { PlusIcon } from '@/assets/images/svgs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

function renderDayWithMarker(props: PickersDayProps<Dayjs>) {
  const { day, selected } = props;
  const dateKey = day.format('YYYY-MM-DD');
  const markerUrl = markeDates[dateKey];

  return (
    <CustomPickersDay
      {...props}
      day={day}
      style={{
        position: 'relative',
        backgroundColor: markerUrl ? 'transparent' : selected ? '#17AA1A' : '',
        pointerEvents: markerUrl ? 'auto' : 'none',
        transition: 'transform 0.2s, background-color 0.2s',
      }}
      className={markerUrl ? 'hover-enabled' : ''}
    >
      <span
        style={{
          fontFamily: 'Pretendard',
          position: 'relative',
          zIndex: 1,
          fontSize: '16px',
          color: markerUrl ? '#ffffff' : selected ? '#ffffff' : '#0f0e0e',
        }}
      >
        {day.date()}
      </span>

      {markerUrl && (
        <img
          src={markerUrl}
          alt="Marker"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
          }}
        />
      )}
    </CustomPickersDay>
  );
}

function CustomCalendarHeader(props: PickersCalendarHeaderProps<Dayjs>) {
  const { currentMonth, onMonthChange } = props;

  const selectNextMonth = () =>
    onMonthChange(currentMonth.add(1, 'month'), 'left');

  const selectPreviousMonth = () =>
    onMonthChange(currentMonth.subtract(1, 'month'), 'right');

  return (
    <CustomCalendarHeaderRoot>
      <IconButton onClick={selectPreviousMonth} title="Previous month">
        <ChevronLeft />
      </IconButton>
      <Typography
        variant="body1"
        sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'Pretendard' }}
      >
        {currentMonth.format('YYYY. MMMM')}
      </Typography>
      <IconButton onClick={selectNextMonth} title="Next month">
        <ChevronRight />
      </IconButton>
    </CustomCalendarHeaderRoot>
  );
}

// 메인 컴포넌트
export default function TodayMungCalendar() {
  return (
    <S.Wrap>
      <S.CalendarArea>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
          <StyledDateCalendar
            slots={{
              calendarHeader: CustomCalendarHeader,
              day: renderDayWithMarker,
            }}
            sx={{
              height: '100%',
              '& .MuiPickersSlideTransition-root-MuiDayCalendar-slideTransition > *':
                {
                  position: 'static !important',
                },
            }}
          />
        </LocalizationProvider>
      </S.CalendarArea>
      <S.TodaymungInsertButton>
        <PlusIcon /> <S.ButtonText>오늘멍 작성하기</S.ButtonText>
      </S.TodaymungInsertButton>
    </S.Wrap>
  );
}

const S = {
  Wrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 20px;
    height: fit-content;
    box-sizing: border-box;
    padding: 0px 30px;
    color: #080808;
  `,
  CalendarArea: styled.div`
    height: 100%;
    height: auto;
    box-sizing: border-box;
    margin-top: 10px;
  `,

  TodaymungInsertButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 16px;
    @media (min-height: 800px) {
      font-size: 16px;
    }
    gap: 6px;
    font-weight: 500;
    padding: 14px 0px;
    border: 1px solid #17aa1a;
    border-radius: 10px;
    background-color: #d3fbd4;
  `,
  ButtonText: styled.span`
    line-height: 19.09px;
  `,
};