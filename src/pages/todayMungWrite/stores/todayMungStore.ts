import { Media, PostDiaryRequest } from '@/service/apis/diary/index.type';
import { create } from 'zustand';

interface TodayMungStore extends PostDiaryRequest {
  setContent: (content: string) => void;
  addPlaces: (placeId: number) => void;
  addDogIds: (dogId: number) => void;
  addMedias: (media: Media) => void;
  deleteImages: (mediaId: number) => void;
  setPublicYn: (publicYn: boolean) => void;
}

export const useTodayMungStore = create<TodayMungStore>((set, get) => ({
  userId: 0,
  title: null,
  content: null,
  places: [],
  dogs: [],
  medias: [],
  publicYn: false,
  setContent: (content: string) => set({ content }),
  addPlaces: (placeId: number) =>
    set((store) => ({ places: [...(store.places || []), placeId] })),
  addMedias: (media: Media) =>
    set((store) => ({
      medias: [...(store.medias || []), media],
    })),
  deleteImages: (mediaId: number) =>
    set((store) => ({
      medias: (store.medias || []).filter((media) => media.mediaId !== mediaId),
    })),
  addDogIds: (dogId: number) =>
    set((store) => ({ dogs: [...(store.dogs || []), dogId] })),
  setPublicYn: (publicYn: boolean) => set({ publicYn }),
}));
