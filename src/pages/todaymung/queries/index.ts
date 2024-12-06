import { useQuery } from '@tanstack/react-query';
import { TodaymungDataType } from '../types/TodayMungData.type';
import { getTodaymungList } from '@/service/apis/diary';

export const useTodaymungData = () => {
  return useQuery<TodaymungDataType>({
    queryKey: ['todaymungData'],
    queryFn: getTodaymungList,
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};
