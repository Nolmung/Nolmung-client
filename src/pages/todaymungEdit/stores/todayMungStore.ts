import { Media, EditDiaryRequest } from '@/service/apis/diary/index.type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TodayMungStore extends EditDiaryRequest {
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  addDogs: (dogId: number) => void;
  deleteDogs: (dogId: number) => void;
  addMedia: (media: Media) => void;
  deleteMedia: (mediaId: number) => void;
  setPublicYn: (publicYn: boolean) => void;
  deleteTodaymungAll: () => void;
}

export const useTodayMungStore = create(
  persist<TodayMungStore>(
    (set) => ({
      title: '',
      content: '',
      dogs: [],
      medias: [],
      publicYn: true,
      setTitle: (title: string) => set({ title }),
      setContent: (content: string) => set({ content }),
      addMedia: (media: Media) =>
        set((store) => ({
          medias: [...(store.medias || []), media].sort(
            (a, b) => b.mediaId! - a.mediaId!,
          ),
        })),
      deleteMedia: (mediaId: number) =>
        set((store) => ({
          medias: (store.medias || []).filter(
            (media) => media.mediaId !== mediaId,
          ),
        })),
      addDogs: (dogId: number) =>
        set((store) => ({ dogs: [...(store.dogs || []), dogId] })),
      deleteDogs: (dogId: number) =>
        set((store) => ({
          dogs: store.dogs?.filter((id) => id !== dogId),
        })),
      setPublicYn: (publicYn: boolean) => set({ publicYn }),
      deleteTodaymungAll: () =>
        set({
          title: '',
          content: '',
          dogs: [],
          medias: [],
          publicYn: true,
        }),
    }),
    {
      name: 'todayMung',
    },
  ),
);
