import { PlaceCategory, ReviewKeyword } from '@/common/types';

/** 후기 등록 */
export interface PostReviewRequest {
  placeId: number;
  rating: number;
  category: PlaceCategory;
  labels: ReviewKeyword[];
}
