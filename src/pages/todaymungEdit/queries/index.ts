import { getDogs } from '@/service/apis/dog';
import { DogsResponse } from '@/service/apis/dog/index.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import { patchTodaymung } from '@/service/apis/diary';
import { useTodayMungStore } from '../stores/todayMungStore';
import { deleteFileFromS3 } from '@/common/utils/uploadImageToS3';

export const useGetDogs = () => {
  return useQuery<DogsResponse>({
    queryKey: ['dogs'],
    queryFn: getDogs,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 2,
  });
};

export const useEditDiary = (diaryId: number) => {
  const { title, content, medias, publicYn, dogs, deleteTodaymungAll } =
    useTodayMungStore();

  const diaryRequest = {
    title,
    content,
    dogs,
    publicYn,
    medias,
  };

  return useMutation({
    mutationFn: () => patchTodaymung(diaryId, diaryRequest),
    onSuccess: () => {
      alert('오늘멍 수정이 완료되었습니다.');
      deleteTodaymungAll();
    },
    onError: (error) => {
      console.log(error);
      alert('오늘멍 수정에 실패했습니다.');
      for (let file of diaryRequest.medias) {
        deleteFileFromS3(file.mediaUrl);
      }
    },
  });
};
