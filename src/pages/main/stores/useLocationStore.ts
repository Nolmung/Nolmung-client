import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserLocation {
  latitude: number;
  longitude: number;
}

interface LocationStore {
  userLocation: UserLocation | null;
  setUserLocation: (location: UserLocation) => void;
  clearUserLocation: () => void;
}

export const useLocationStore = create(
  persist<LocationStore>(
    (set) => ({
      userLocation: null,
      setUserLocation: (location) => set({ userLocation: location }),
      clearUserLocation: () => set({ userLocation: null }),
    }),
    {
      name: 'user-location', 
    },
  ),
);
