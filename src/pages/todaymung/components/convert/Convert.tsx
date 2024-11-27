import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { match } from 'ts-pattern';

import { S } from './Convert.style';
import { viewModeType } from './Convert.type';
import theme from './theme';
import TodayMungCalendar from '../calendar/TodayMungCalendar';
import TodayMungList from '../list/TodayMungList';

import {
  TodayMungCalendarIcon,
  TodayMungCalendarIconActive,
  TodayMungListIcon,
  TodayMungListIconActive,
} from '@/assets/images/svgs';
const Convert = () => {
  const [viewMode, setViewMode] = useState<viewModeType>('calendar');

  const handleViewChange = (mode: 'calendar' | 'list') => {
    setViewMode(mode);
  };
  return (
    <>
      <S.ConvertArea>
        <S.CalendarMode
          mode={viewMode}
          onClick={() => handleViewChange('calendar')}
        >
          {match(viewMode)
            .with('calendar', () => <TodayMungCalendarIconActive />)
            .otherwise(() => (
              <TodayMungCalendarIcon />
            ))}
        </S.CalendarMode>
        <S.ListMode mode={viewMode} onClick={() => handleViewChange('list')}>
          {match(viewMode)
            .with('list', () => <TodayMungListIconActive />)
            .otherwise(() => (
              <TodayMungListIcon />
            ))}
        </S.ListMode>
      </S.ConvertArea>
      {viewMode === 'calendar' ? (
        <ThemeProvider theme={theme}>
          <TodayMungCalendar />
        </ThemeProvider>
      ) : (
        <TodayMungList />
      )}
    </>
  );
};

export default Convert;
