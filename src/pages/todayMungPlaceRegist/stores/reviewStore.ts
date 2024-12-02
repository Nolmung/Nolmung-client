import { PlaceCategory } from '@/common/types';
import { create } from 'zustand';

interface Labels {
  labelId: number;
  labelName: string;
}
interface Review {
  rating: number;
  placeId: number;
  category: PlaceCategory;
  labels: Labels[];
  placeName: string;
}

interface ReviewStore {
  reviewlist: Review[];
  singleReview: Review | null;
  addReviewList: (reviews: Review) => void;
  deleteReview: (labelId: number, placeId: number) => void;
}

export const useReviewStore = create<ReviewStore>((set) => ({
  reviewlist: [],
  singleReview: null,
  setSingleReview: () => set({}),
  addReviewList: (reviews: Review) =>
    set((store) => ({
      reviewlist: [...store.reviewlist, reviews],
    })),
  deleteReview: (labelId: number, placeId: number) =>
    set((store) => ({
      reviewlist: store.reviewlist.filter(
        (review) =>
          review.placeId !== placeId &&
          review.labels.filter((label) => label.labelId !== labelId),
      ),
    })),
}));
