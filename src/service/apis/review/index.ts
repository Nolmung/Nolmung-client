import { instance } from '..';
import { GetReviewResponse, PostReviewRequest } from './index.type';

export const postReviews = async (review: PostReviewRequest) => {
  const response = await instance.post('/reviews', review);
  return response.status;
};

export const getReviews = async (): Promise<GetReviewResponse[]> => {
  const response = await instance.get('/reviews');
  return response.data.data;
};

export const deleteReview = async (reviewId: number) => {
  const response = await instance.delete(`/reviews/${reviewId}`);
  return response.status;
};
