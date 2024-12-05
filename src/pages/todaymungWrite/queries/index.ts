import { getDogs } from '@/service/apis/dog';
import { DogsResponse } from '@/service/apis/dog/index.type';
import { postReviews } from '@/service/apis/review';
import { PostReviewRequest } from '@/service/apis/review/index.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useTodayMungStore } from '../stores/todayMungStore';
import { postTodaymung } from '@/service/apis/diary';

export const useGetDogs = () => {
  return useQuery<DogsResponse>({
    queryKey: ['dogs'],
    queryFn: getDogs,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 2,
  });
};

export const usePostReviews = (review: PostReviewRequest) => {
  return useMutation<number, Error, PostReviewRequest>({
    mutationFn: () => postReviews(review),
    onSuccess: () => {
      alert('리뷰가 등록되었습니다.');
    },
    onError: () => {
      alert('리뷰 등록에 실패했습니다.');
    },
  });
};

export const usePostDiary = () => {
  const { title, content, places, medias, publicYn, dogIds } =
    useTodayMungStore();

  return useMutation<number, Error, any>({
    mutationFn: () => {
      const postTodayMungData = {
        title,
        content,
        places,
        medias,
        publicYn,
        dogIds,
      };
      return postTodaymung(postTodayMungData);
    },
    onSuccess: () => {
      alert('오늘의 뭉 등록이 완료되었습니다.');
    },
    onError: () => {
      alert('오늘의 뭉 등록에 실패했습니다.');
    },
  });
};
