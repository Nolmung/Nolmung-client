import { Media, PostDiaryRequest } from '@/service/apis/diary/index.type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TodayMungStore extends PostDiaryRequest {
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  addPlaces: (placeId: number) => void;
  addDogs: (dogId: number) => void;
  deleteDogs: (dogId: number) => void;
  addMedia: (media: Media) => void;
  deleteMedia: (mediaId: number) => void;
  setPublicYn: (publicYn: boolean) => void;
  deleteTodaymungAll: () => void;
  deletePlacesAll: () => void;
}

export const useTodayMungStore = create(
  persist<TodayMungStore>(
    (set) => ({
      title: '',
      content: '',
      places: [],
      dogs: [],
      medias: [],
      publicYn: true,
      setTitle: (title: string) => set({ title }),
      setContent: (content: string) => set({ content }),
      addPlaces: (placeId: number) =>
        set((store) => ({
          places: store.places?.includes(placeId)
            ? store.places // 이미 존재하면 그대로 반환
            : [...(store.places || []), placeId], // 존재하지 않으면 추가
        })),
      deletePlacesAll: () => set({ places: [] }),
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
          places: [],
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
