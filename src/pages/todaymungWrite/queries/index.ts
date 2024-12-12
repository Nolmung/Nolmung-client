import { getDogs } from '@/service/apis/dog';
import { DogsResponse } from '@/service/apis/dog/index.type';
import { postReviews } from '@/service/apis/review';
import { PostReviewRequest } from '@/service/apis/review/index.type';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postTodaymung } from '@/service/apis/diary';
import { ROUTE } from '@/common/constants/route';
import { useNavigate } from 'react-router-dom';
import { useTodayMungStore } from '../stores/todayMungStore';
import { useReviewStore } from '@/pages/todaymungPlaceRegist/stores/reviewStore';
import { deleteFileFromS3 } from '@/common/utils/uploadImageToS3';
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

export const usePostReviews = () => {
  const { deleteReviewAll } = useReviewStore();
  return useMutation<number, Error, PostReviewRequest[]>({
    mutationFn: (review) => postReviews(review),
    onSuccess: () => {
      toast.success('리뷰 등록이 완료되었습니다.');
      deleteReviewAll();
    },
    onError: () => {
      toast.error('리뷰 등록에 실패했습니다.');
    },
  });
};

export const usePostDiary = () => {
  const { deleteTodaymungAll } = useTodayMungStore();
  const { deleteReviewAll } = useReviewStore();

  const navigate = useNavigate();
  const { title, content, places, medias, publicYn, dogs } =
    useTodayMungStore();

  const diaryRequest = {
    title,
    content,
    places,
    medias,
    publicYn,
    dogs,
  };

  return useMutation<number, Error>({
    mutationFn: () => {
      return postTodaymung(diaryRequest);
    },
    onSuccess: () => {
      toast.success('오늘멍 등록이 완료되었습니다.');
      deleteTodaymungAll();
      deleteReviewAll();
      navigate(ROUTE.TODAYMUNG());
    },
    onError: () => {
      toast.error('오늘멍 등록에 실패했습니다.');
      for (let file of diaryRequest.medias) {
        deleteFileFromS3(file.mediaUrl);
      }
      deleteTodaymungAll();
      deleteReviewAll();
    },
  });
};
