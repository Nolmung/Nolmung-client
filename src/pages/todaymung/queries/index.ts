import { useQuery } from '@tanstack/react-query';
import { getTodaymungList } from '@/service/apis/diary';
import { getUserBadges } from '@/service/apis/user';

export const useTodaymungData = () => {
  return useQuery({
    queryKey: ['todaymungData'],
    queryFn: getTodaymungList,
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};

export const useGetBadgesData = () => {
  return useQuery({
    queryKey: ['badgesData'],
    queryFn: getUserBadges,
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
}