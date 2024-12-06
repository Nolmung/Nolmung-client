import { useQuery } from '@tanstack/react-query';
import { getTodaymungList } from '@/service/apis/diary';

export const useTodaymungData = () => {
  return useQuery({
    queryKey: ['todaymungData'],
    queryFn: getTodaymungList,
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};
