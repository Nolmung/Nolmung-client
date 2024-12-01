import { Media, PostDiaryRequest } from '@/service/apis/diary/index.type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TodayMungStore extends PostDiaryRequest {
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  addPlaces: (placeId: number) => void;
  addDogIds: (dogId: number) => void;
  deleteDogIds: (dogId: number) => void;
  addMedias: (media: Media) => void;
  deleteImages: (mediaId: number) => void;
  setPublicYn: (publicYn: boolean) => void;
}

export const useTodayMungStore = create(
  persist<TodayMungStore>(
    (set) => ({
      title: '',
      content: '',
      places: [],
      dogIds: [],
      medias: [],
      publicYn: true,
      setTitle: (title: string) => set({ title }),
      setContent: (content: string) => set({ content }),
      addPlaces: (placeId: number) =>
        set((store) => ({ places: [...(store.places || []), placeId] })),
      addMedias: (media: Media) =>
        set((store) => ({
          medias: [...(store.medias || []), media],
        })),
      deleteImages: (mediaId: number) =>
        set((store) => ({
          medias: (store.medias || []).filter(
            (media) => media.mediaId !== mediaId,
          ),
        })),
      addDogIds: (dogId: number) =>
        set((store) => ({ dogIds: [...(store.dogIds || []), dogId] })),
      deleteDogIds: (dogId: number) =>
        set((store) => ({
          dogIds: store.dogIds?.filter((id) => id !== dogId),
        })),
      setPublicYn: (publicYn: boolean) => set({ publicYn }),
    }),
    {
      name: 'todayMung',
    },
  ),
);
