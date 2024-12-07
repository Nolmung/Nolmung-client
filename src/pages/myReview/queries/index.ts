import { deleteReview, getReviews } from '@/service/apis/review';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetReviews = () => {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: () => {
      return getReviews();
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
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
      alert('리뷰 삭제가 완료되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
    onError: () => {
      alert('리뷰 삭제에 실패했습니다.');
    },
  });
};
