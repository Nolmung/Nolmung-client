import { getDogs } from '@/service/apis/dog';
import { DogsResponse } from '@/service/apis/dog/index.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import { patchTodaymung } from '@/service/apis/diary';
import { useTodayMungStore } from '../stores/todayMungStore';
import { toast } from 'react-toastify';

export const useGetDogs = () => {
  return useQuery<DogsResponse>({
    queryKey: ['dogs'],
    queryFn: getDogs,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 2,
  });
};

export const useEditDiary = () => {
  const { deleteTodaymungAll } = useTodayMungStore();

  return useMutation({
    mutationFn: ({
      diaryRequest,
      diaryId,
    }: {
      diaryRequest: any;
      diaryId: number;
    }) => patchTodaymung(diaryRequest, diaryId),

    onSuccess: () => {
      toast.success('오늘멍 수정이 완료되었습니다.');
      deleteTodaymungAll();
      window.location.href = '/todaymung';
    },
    onError: () => {
      toast.error('오늘멍 수정에 실패했습니다.');
      deleteTodaymungAll();
    },
  });
};
