import { PlaceCategory, ReviewKeyword } from '@/common/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Review {
  placeId: number;
  rating: number;
  roadAddress: string;
  category: PlaceCategory;
  labels: ReviewKeyword[];
  placeName: string;
}

interface ReviewStore {
  reviewlist: Review[];
  singleReview: Review | null;
  addReviewList: (reviews: Review) => void;
  deleteReview: (placeId: number) => void;
  deleteReviewAll: () => void;
}

export const useReviewStore = create(
  persist<ReviewStore>(
    (set) => ({
      reviewlist: [],
      singleReview: null,
      setSingleReview: () => set({}),
      addReviewList: (reviews: Review) =>
        set((store) => ({
          reviewlist: [
            ...store.reviewlist.filter(
              (review) => review.placeId !== reviews.placeId, // 중복 제거 조건
            ),
            reviews,
          ],
        })),
      deleteReview: (placeId: number) =>
        set((store) => ({
          reviewlist: store.reviewlist.filter(
            (review) => review.placeId !== placeId,
          ),
        })),
      deleteReviewAll: () => set({ reviewlist: [] }),
    }),
    {
      name: 'review',
    },
  ),
);
