import { getReviews, deleteReview } from '@/service/apis/review';
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useGetReviews = () => {
  return useInfiniteQuery({
    queryKey: ['reviews'],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getReviews({ page: pageParam, size: 10 }),
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.page + 1 : undefined;
    },
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};

export const useDeleteReviews = () => {
  const queryClient = useQueryClient();

  return useMutation<number, Error, number>({
    mutationFn: async (reviewId) => {
      const response = await deleteReview(reviewId);
      return response;
    },
    onSuccess: () => {
      toast.success('리뷰 삭제가 완료되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
    onError: () => {
      toast.error('리뷰 삭제에 실패했습니다.');
    },
  });
};
