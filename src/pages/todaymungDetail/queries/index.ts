import { useQuery } from '@tanstack/react-query';
import { getTodaymungDetail } from '@/service/apis/diaryDetail';

export const useTodaymungDetailData = (diaryId: number) => {
  return useQuery({
    queryKey: ['TodaymungDetailData', diaryId],
    queryFn: () => getTodaymungDetail(diaryId),
    enabled: !!diaryId,
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};
