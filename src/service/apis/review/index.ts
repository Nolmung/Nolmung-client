import { instance } from '..';
import {
  GetReviewsParams,
  GetTodayReviewResponse,
  PostReviewRequest,
} from './index.type';

export const postReviews = async (reviews: PostReviewRequest[]) => {
  const response = await instance.post('/reviews', { reviews: reviews });
  return response.status;
};

export const getReviews = async ({
  page,
  size,
}: GetReviewsParams): Promise<{
  data: any;
  page: number;
  hasNext: boolean;
}> => {
  const response = await instance.get('/reviews', {
    params: {
      page,
      size,
    },
  });

  const data = response.data.data;
  const hasNext = data.length === size;
  return {
    data,
    page,
    hasNext,
  };
};

export const deleteReview = async (reviewId: number) => {
  const response = await instance.delete(`/reviews/${reviewId}`);
  return response.status;
};

export const getTodayReview = async (): Promise<GetTodayReviewResponse[]> => {
  const response = await instance.get('/reviews/today');
  return response.data.data;
};
