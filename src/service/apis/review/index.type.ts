import { PlaceCategory, ReviewKeyword } from '@/common/types';

/** 후기 등록 */
export interface PostReviewRequest {
  placeId: number;
  rating: number;
  category: PlaceCategory;
  labels: ReviewKeyword[];
}

export interface GetReviewResponse {
  reviewId: number;
  placeId: number;
  placeName: string;
  address: string;
  rating: number;
  Labels: ReviewKeyword[];
}

export interface GetReviewsParams {
  page: number;
  size: number;
}

interface Label {
  labelId: number;
  labelName: string;
}
export interface GetTodayReviewResponse {
  reviewId: number;
  placeId: number;
  category: PlaceCategory;
  placeName: string;
  address: string;
  rating: number;
  Labels: Label[];
}
