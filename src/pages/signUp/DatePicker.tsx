import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker'; // 별칭 사용
import { useState } from 'react';
import { S } from './styles/signUp.styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  const theme = createTheme({
    typography: {
      fontFamily: 'Pretendard, Arial, sans-serif',
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MUIDatePicker
            value={selectedDate}
            onChange={handleDateChange}
            views={['year', 'month', 'day']}
            openTo="year"
            format="YYYY-MM-DD"
            slots={{
              openPickerIcon: S.DatepickerCalendarIcon, // 아이콘 변경
            }}
            slotProps={{
              openPickerButton: {
                sx: {
                  marginRight: '1px', // 아이콘 버튼의 오른쪽 여백
                },
              },
              textField: {
                sx: {
                  fontSize: '16px',
                  marginTop: '8px',
                  '& .MuiOutlinedInput-root': {
                    height: '50px',
                    borderRadius: '10px', // 둥근 모서리 설정
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#d9d9d9', // 호버 시 테두리 색상
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#d9d9d9', // 포커스 시 테두리 색상
                      borderWidth: '1px', // 테두리 두께
                      borderStyle: 'solid', // 테두리 스타일
                    },
                  },
                },
              },
              popper: {
                sx: {
                  '& .MuiPaper-root': {
                    borderRadius: '10px', // 팝업 테두리 둥글게
                    padding: '16px', // 내부 여백
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자 효과
                  },
                  '& .MuiPickersDay-root': {
                    fontWeight: 'bold', // 날짜 텍스트 강조
                    '&:hover': {
                      backgroundColor: '#d3fbd4', // 날짜 호버 시 배경색
                    },
                    '&.Mui-selected': {
                      backgroundColor: '#17aa1a', // 선택된 날짜 배경색
                      color: '#ffffff', // 선택된 날짜 텍스트 색상
                    },
                  },
                  '& .MuiPickersYear-root': {
                    borderRadius: '30px', // 둥근 모서리 크기 수정
                    // '&:hover': {
                    //   backgroundColor: '#d3fbd4 !important', // 호버 시 배경색
                    // },
                    '&.Mui-selected': {
                      backgroundColor: '#17aa1a !important', // 선택된 연도 배경색
                      color: '#ffffff', // 선택된 연도 텍스트 색상
                    },
                    '&.Mui-selected:hover': {
                      backgroundColor: '#17aa1a !important', // 선택된 연도에 호버 시 배경색
                    },
                  },
                  '& .MuiPickersMonth-root': {
                    fontWeight: 'bold',
                    borderRadius: '30px', // 둥근 모서리 크기 수정
                    // '&:hover': {
                    //   backgroundColor: '#D3FBD4 !important', // 호버 시 배경색
                    // },
                    '&.Mui-selected': {
                      backgroundColor: '#17aa1a', // 선택된 연도 배경색
                      color: '#ffffff', // 선택된 연도 텍스트 색상
                    },
                    '&.Mui-selected:hover': {
                      backgroundColor: '#17aa1a', // 선택된 연도에 호버 시 배경색
                    },
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}

export default DatePicker;
