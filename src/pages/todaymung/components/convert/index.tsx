import { useState } from 'react';
import { match } from 'ts-pattern';

import { S } from '../../styles/Convert.style';
import { ViewMode } from '../../types/Convert.type';
import TodayMungCalendar from '../todayMungCalendar';
import TodayMungList from '../todayMungList';
import {
  TodayMungCalendarIcon,
  TodayMungCalendarIconActive,
  TodayMungListIcon,
  TodayMungListIconActive,
} from '@/assets/images/svgs';
import { ListDataProps } from '../../types/TodayMungList.type';
import ReactGA from 'react-ga4';

const Convert = ({ listData }: ListDataProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Calendar);
  const handleViewChange = (mode: ViewMode) => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'Change View Mode',
      label: mode === ViewMode.Calendar ? 'Calendar View' : 'List View',
    });
    setViewMode(mode);
  };
  return (
    <>
      <S.ConvertArea>
        <S.CalendarMode
          mode={viewMode}
          onClick={() => handleViewChange(ViewMode.Calendar)}
        >
          {match(viewMode)
            .with(ViewMode.Calendar, () => <TodayMungCalendarIconActive />)
            .otherwise(() => (
              <TodayMungCalendarIcon />
            ))}
        </S.CalendarMode>
        <S.ListMode
          mode={viewMode}
          onClick={() => handleViewChange(ViewMode.List)}
        >
          {match(viewMode)
            .with(ViewMode.List, () => <TodayMungListIconActive />)
            .otherwise(() => (
              <TodayMungListIcon />
            ))}
        </S.ListMode>
      </S.ConvertArea>
      <S.ViewModeArea $CalendarView={viewMode === ViewMode.Calendar}>
        {viewMode === ViewMode.Calendar ? (
          <TodayMungCalendar listData={listData} />
        ) : (
          <TodayMungList listData={listData} />
        )}
      </S.ViewModeArea>
    </>
  );
};

export default Convert;
