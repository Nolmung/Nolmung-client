import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker as MUIDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { S } from '../styles/signUp.styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');
import { koKR } from '@mui/x-date-pickers/locales';

interface DatePickerProps {
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Pretendard',
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <LocalizationProvider
          adapterLocale="ko"
          dateAdapter={AdapterDayjs}
          localeText={
            koKR.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <MUIDatePicker
            value={value}
            onChange={onChange}
            views={['year', 'month', 'day']}
            openTo="year"
            format="YYYY-MM-DD"
            slots={{
              openPickerIcon: S.DatepickerCalendarIcon,
            }}
            slotProps={{
              openPickerButton: {
                sx: {
                  marginRight: '1px',
                },
              },
              textField: {
                sx: {
                  width: '48%',
                  fontSize: '16px',
                  marginTop: '8px',
                  '& .MuiOutlinedInput-root': {
                    height: '50px',
                    borderRadius: '10px',
                    '& fieldset': {
                      borderColor: '#d9d9d9', // 기본 보더 색상
                    },
                    '&:hover fieldset': {
                      borderColor: '#A7A7A7', // 호버 시 보더 색상
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#d9d9d9',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                    },
                  },
                },
                inputProps: {
                  placeholder: 'YYYY-MM-DD',
                },
              },
              popper: {
                sx: {
                  '& .MuiPaper-root': {
                    borderRadius: '10px',
                    padding: '20px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  },
                  '& .MuiPickersDay-root': {
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#F0F0F0 !important',
                    },
                    '&.Mui-selected': {
                      backgroundColor: '#d3fbd4 !important',
                      border: '1px solid #17AA1A',
                      color: '#17AA1A !important',
                    },
                  },
                  '& .MuiPickersYear-root': {
                    borderRadius: '30px',
                    '& .Mui-selected': {
                      backgroundColor: '#d3fbd4 !important',
                      border: '1px solid #17AA1A',
                      color: '#17AA1A !important',
                    },
                  },
                  '& .MuiPickersMonth-root': {
                    fontWeight: 'bold',
                    borderRadius: '30px',
                    '& .Mui-selected': {
                      backgroundColor: '#d3fbd4 !important',
                      border: '1px solid #17AA1A',
                      color: '#17AA1A !important',
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
};

export default DatePicker;
