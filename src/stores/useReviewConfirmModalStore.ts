import { create } from 'zustand';

interface ReviewConfirmModalStore {
  isReviewConfirmModalOpen: boolean;
  openReviewConfirmModal: () => void;
  closeReviewConfirmModal: () => void;
}

export const useReviewConfirmModalStore = create<ReviewConfirmModalStore>(
  (set) => ({
    isReviewConfirmModalOpen: false,
    openReviewConfirmModal: () => set({ isReviewConfirmModalOpen: true }),
    closeReviewConfirmModal: () => set({ isReviewConfirmModalOpen: false }),
  }),
);
