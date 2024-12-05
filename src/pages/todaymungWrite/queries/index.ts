import { getDogs } from '@/service/apis/dog';
import { DogsResponse } from '@/service/apis/dog/index.type';
import { useQuery } from '@tanstack/react-query';

export const useGetDogs = () => {
  return useQuery<DogsResponse>({
    queryKey: ['dogs'],
    queryFn: getDogs,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 2,
  });
};
