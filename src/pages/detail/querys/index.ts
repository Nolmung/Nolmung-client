// hooks/usePostDetail.ts
import { useQuery } from '@tanstack/react-query';

import { getPostDetail } from '@/service/apis/place';
import { PlaceDetailResponse } from '@/service/apis/place/index.type';

export const useGetPostDetail = (placeId: string | number) => {
  return useQuery<PlaceDetailResponse>({
    queryKey: ['postDetail', placeId],
    queryFn: () => getPostDetail(placeId), // queryFn 문법 수정
    enabled: !!placeId, // placeId가 존재할 때만 쿼리를 실행
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터가 신선한 것으로 간주
    gcTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
    retry: 2, // 실패 시 최대 2회 재시도
  });
};
