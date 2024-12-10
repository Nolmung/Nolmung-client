import { create } from 'zustand';

interface LoginPromptModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useLoginPromptModalStore = create<LoginPromptModalStore>(
  (set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
  }),
);
