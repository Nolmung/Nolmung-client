import { instance } from '..';
import { PostReviewRequest } from './index.type';

export const postReviews = async (review: PostReviewRequest) => {
  const response = await instance.post('/reviews/', review);
  return response.status;
};
