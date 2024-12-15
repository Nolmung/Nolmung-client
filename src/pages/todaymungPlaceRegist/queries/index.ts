import { getPlacesSearch } from '@/service/apis/place';
import { PlaceSearchResponse } from '@/service/apis/place/index.type';
import { getTodayReview } from '@/service/apis/review';
import { GetTodayReviewResponse } from '@/service/apis/review/index.type';
import { useQuery } from '@tanstack/react-query';

export const useGetPlaceSearch = (keyword: string) => {
  return useQuery<PlaceSearchResponse[]>({
    queryKey: ['placeSearch', keyword],
    queryFn: () => getPlacesSearch(keyword),
    enabled: !!keyword,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
};

export const useGetTodayReview = () => {
  return useQuery<GetTodayReviewResponse[]>({
    queryKey: ['todayReview'],
    queryFn: getTodayReview,
  });
};
