import { getDogs } from '@/service/apis/dog';
import { DogsResponse } from '@/service/apis/dog/index.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import { patchTodaymung } from '@/service/apis/diary';

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
  return useMutation({
    mutationFn: ({
      diaryRequest,
      diaryId,
    }: {
      diaryRequest: any;
      diaryId: number;
    }) => patchTodaymung(diaryRequest, diaryId),

    onSuccess: () => {
      alert('오늘멍 수정이 완료되었습니다.');
      window.location.href = '/todaymung';
    },
    onError: (error) => {
      console.error(error);
      alert('오늘멍 수정에 실패했습니다.');
    },
  });
};
