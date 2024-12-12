import { getPlacesSearch } from '@/service/apis/place';
import { PlaceSearchResponse } from '@/service/apis/place/index.type';
import { getTodayReview } from '@/service/apis/review';
import { GetTodayReviewResponse } from '@/service/apis/review/index.type';
import { useQuery } from '@tanstack/react-query';

export const useGetPlaceSearch = (keyword: string) => {
  return useQuery<PlaceSearchResponse[]>({
    queryKey: ['placeSearch', keyword], // queryKey에 keyword 포함
    queryFn: () => getPlacesSearch(keyword), // queryKey로부터 keyword 사용
    enabled: !!keyword, // keyword가 존재할 때만 실행
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
