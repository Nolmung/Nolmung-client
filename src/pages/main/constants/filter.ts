export const FILTER_TYPES = {
  WEIGHT: 'weight',
  RATING: 'rating',
};

export const FILTER_OPTIONS = {
  weight: [
    {
      value: 'S',
      label: ' 10kg 이하',
    },
    { value: 'M', label: '10kg ~ 20kg' },
    { value: 'L', label: '20kg 이상' },
  ],
  rating: [
    { value: '3', label: '3.0 이상' },
    { value: '4', label: '4.0 이상' },
  ],
};
