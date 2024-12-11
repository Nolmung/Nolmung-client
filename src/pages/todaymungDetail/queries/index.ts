import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getTodaymungDetail,
  deleteTodaymung,
} from '@/service/apis/diaryDetail';
import { toast } from 'react-toastify';

export const useTodaymungDetailData = (diaryId: number) => {
  return useQuery({
    queryKey: ['TodaymungDetailData', diaryId],
    queryFn: () => getTodaymungDetail(diaryId),
    enabled: !!diaryId,
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
};

export const useTodaymungDelete = (diaryId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (diaryId: number) => deleteTodaymung(diaryId),
    onSuccess: () => {
      toast.success('오늘멍 삭제가 완료되었습니다.');

      queryClient.invalidateQueries({
        queryKey: ['TodaymungDetailData', diaryId],
      });
    },
    onError: (error) => {
      console.error('오늘멍 삭제 중 에러 발생:', error);
      toast.error('오늘멍 삭제에 실패했습니다.');
    },
  });
};
