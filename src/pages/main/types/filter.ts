import { DogSize } from "@/service/apis/user/index.types";

export type FilterType = 'weight' | 'rating';
export const FILTER_TYPES = {
  WEIGHT: 'weight',
  RATING: 'rating',
} as const;

export const FILTER_OPTIONS: Record<FilterType, {value: string | number; label: string}[]> = {
  weight: [
    { value: 'SMALL', label: '소형견' },
    { value: 'MEDIUM', label: '중형견' },
    { value: 'LARGE', label: '대형견' },
  ],
  rating: [
    { value: 3, label: '3점 이상' },
    { value: 4, label: '4점 이상' },
  ],
}


export type FilterValue = FilterType | null;

export type RatingFitlerValue = 3 | 4 ;

export interface FilterState {
  weight: DogSize | null;
  rating: RatingFitlerValue | null;
}
