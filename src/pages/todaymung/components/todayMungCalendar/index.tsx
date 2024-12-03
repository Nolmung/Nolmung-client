import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { PickersDayProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersCalendarHeaderProps } from '@mui/x-date-pickers/PickersCalendarHeader';
import dayjs, { Dayjs } from 'dayjs';
import { S } from '../../styles/TodayMungCalendarRoot.style';

import {
  CustomCalendarHeaderRoot,
  StyledDateCalendar,
  CustomPickersDay,
} from '../../styles/TodayMungCalendar.style';

import { PlusIcon } from '@/assets/images/svgs';
import 'dayjs/locale/ko';
import {
  CalendarDataProps,
  ListDataProps,
} from '../../types/TodayMungList.type';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';

dayjs.locale('ko');

function renderDayWithMarker(
  props: PickersDayProps<Dayjs>,
  listData: CalendarDataProps,
) {
  const { day, selected } = props;
  const { diaries } = listData;
  const dateKey = day.format('YYYY.MM.DD');
  const diary = diaries.find((entry) => entry.createdAt === dateKey);
  const markerUrl = diary?.mediaUrl;
  const isTruthy = markerUrl !== undefined && markerUrl !== null;

  const isToday = day.isSame(dayjs(), 'day');
  return (
    <CustomPickersDay
      {...props}
      day={day}
      className={`${isTruthy || isToday ? 'hover-enabled' : ''} ${
        selected ? 'Mui-selected' : ''
      }`}
    >
      <S.DayText $hasMarker={!!isTruthy}>{day.date()}</S.DayText>
      {diary && (
        <S.MarkerWrapper>
          <S.MarkerOverlay />
          {markerUrl ? (
            <S.MarkerImage src={markerUrl} alt="Marker" />
          ) : (
            <S.MarkerImage src="/svgs/todayMungDefaultImage.svg" />
          )}
        </S.MarkerWrapper>
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
export default function TodayMungCalendar({ listData }: ListDataProps) {
  const navigate = useNavigate();

  const navigateToTodaymungWrite = () => {
    navigate(ROUTE.TODAYMUNG_WRITE());
  };

  return (
    <S.Wrap>
      <S.CalendarArea>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
          <StyledDateCalendar
            slots={{
              calendarHeader: CustomCalendarHeader,
              day: (props) => renderDayWithMarker(props, listData),
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
      <S.TodaymungInsertButton onClick={navigateToTodaymungWrite}>
        <PlusIcon /> <S.ButtonText>오늘멍 작성하기</S.ButtonText>
      </S.TodaymungInsertButton>
    </S.Wrap>
  );
}
