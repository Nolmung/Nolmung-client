export type FilterType = 'weight' | 'rating';
export type FilterValue = FilterType | null;

export interface FilterState {
  weight: FilterValue;
  rating: FilterValue;
}
