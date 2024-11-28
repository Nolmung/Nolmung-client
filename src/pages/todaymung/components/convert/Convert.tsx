// Convert.tsx

import { useState } from 'react';
import { match } from 'ts-pattern';

import { S } from './Convert.style';
import { viewModeType } from './Convert.type';
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
      <S.Wrapper>
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
        <S.ViewModeArea>
          {viewMode === 'calendar' ? <TodayMungCalendar /> : <TodayMungList />}
        </S.ViewModeArea>
      </S.Wrapper>
    </>
  );
};

export default Convert;
