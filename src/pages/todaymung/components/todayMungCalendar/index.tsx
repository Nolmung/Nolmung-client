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

import 'dayjs/locale/ko';
import {
  CalendarDataProps,
  ListDataProps,
} from '../../types/TodayMungList.type';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import ReactGA from 'react-ga4';
import { convertFormatDate } from '@/common/utils/convertFormatDate';

dayjs.locale('ko');

/** 달력에 마커 남기기 커스텀 */
function renderDayWithMarker(
  props: PickersDayProps<Dayjs>,
  listData: CalendarDataProps,
) {
  const { day, selected } = props;

  const { diaries } = listData; //server Data

  const dateKey = day.format('YYYY.MM.DD');
  const diary = diaries.find(
    (entry) => convertFormatDate(entry.createdAt) === dateKey,
  );
  const imageUrl =
    diary?.mediaList?.find((media) => media.mediaType === 'IMAGE')?.mediaUrl ||
    '/svgs/todayMungDefaultImage.svg';
  const isTruthy = !!diary;
  const isToday = day.isSame(dayjs(), 'day');
  const navigate = useNavigate();

  const handleDayClick = () => {
    if (isTruthy) {
      ReactGA.event({
        category: 'Diary',
        action: 'View Diary',
        label: `Diary ID: ${diary?.diaryId}`,
      });

      navigate(`/todaymung/detail/${diary?.diaryId}`);
    } else if (isToday) {
      ReactGA.event({
        category: 'Diary',
        action: 'Create New Diary',
        label: 'User navigated to create new diary',
      });
      navigate(ROUTE.TODAYMUNG_WRITE());
    }
  };

  return (
    <CustomPickersDay
      {...props}
      day={day}
      className={`${isTruthy || isToday ? 'hover-enabled' : ''} ${
        selected ? 'Mui-selected' : ''
      }`}
      onClick={handleDayClick}
    >
      <S.DayText $hasMarker={!!isTruthy}>{day.date()}</S.DayText>
      {diary && (
        <S.MarkerWrapper>
          <S.MarkerOverlay />
          {diary ? (
            <S.MarkerImage
              src={imageUrl}
              alt="Marker"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  '/svgs/todayMungDefaultImage.svg';
              }}
            />
          ) : (
            <S.MarkerImage src="/svgs/todayMungDefaultImage.svg" />
          )}
        </S.MarkerWrapper>
      )}
    </CustomPickersDay>
  );
}

/** 달력의 Header 부분 커스텀 */
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
              overflow: 'scroll',
              '& .MuiPickersSlideTransition-root-MuiDayCalendar-slideTransition > *':
                {
                  position: 'static !important',
                },
            }}
          />
        </LocalizationProvider>
      </S.CalendarArea>
    </S.Wrap>
  );
}
