import { getDogs } from '@/service/apis/dog';
import { DogsResponse } from '@/service/apis/dog/index.type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { patchTodaymung } from '@/service/apis/diary';
import { useTodayMungStore } from '../stores/todayMungStore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import { useState } from 'react';

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
  const navigate = useNavigate();
  const [diaryId, setDiaryId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      diaryRequest,
      diaryId,
    }: {
      diaryRequest: any;
      diaryId: number;
    }) => {
      setDiaryId(diaryId);
      return patchTodaymung(diaryRequest, diaryId);
    },
    onSuccess: () => {
      toast.success('오늘멍 수정이 완료되었습니다.');
      deleteTodaymungAll();
      queryClient.invalidateQueries({
        queryKey: ['TodaymungDetailData'],
      });
      if (diaryId !== null) {
        navigate(ROUTE.TODAYMUNG_DETAIL(diaryId));
      }
    },
    onError: () => {
      toast.error('오늘멍 수정에 실패했습니다.');
      deleteTodaymungAll();
    },
  });
};
