import { create } from 'zustand';

interface ConfirmModalStore {
  isConfirmModalOpen: boolean;
  openConfirmModal: () => void;
  closeConfirmModal: () => void;
}

export const useConfirmModalStore = create<ConfirmModalStore>((set) => ({
  isConfirmModalOpen: false,
  openConfirmModal: () => set({ isConfirmModalOpen: true }),
  closeConfirmModal: () => set({ isConfirmModalOpen: false }),
}));
