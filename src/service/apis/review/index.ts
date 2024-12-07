import { instance } from '..';
import {
  GetReviewResponse,
  GetReviewsParams,
  PostReviewRequest,
} from './index.type';

export const postReviews = async (review: PostReviewRequest) => {
  const response = await instance.post('/reviews', review);
  return response.status;
};

// export const getReviews = async ({
//   page,
//   size,
// }: GetReviewsParams): Promise<GetReviewResponse[]> => {
//   const response = await instance.get('/reviews', {
//     params: {
//       page,
//       size,
//     },
//   });
//   return response.data.data;
// };

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

  const data = response.data.data; // 응답 데이터
  const hasNext = data.length === size; // 받은 데이터가 size와 같으면 다음 페이지가 있다고 판단
  console.log('data', data);
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
