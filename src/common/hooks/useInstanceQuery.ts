import { useQuery } from '@tanstack/react-query';

/** 공통으로 자주 사용하는 React Query의 useQuery
 * @param {string} key - React Query의 queryKey로 사용되는 고유 키
 * @param {() => Promise<any>} queryFn - 데이터를 가져오는 비동기 함수 (Promise를 반환해야 함)
 * @param {number} staleTime - 데이터가 신선한 상태로 유지되는 시간(ms)
 * @param {number} gcTime - 데이터가 stale 상태가 된 후 캐시에서 삭제되기까지의 시간(ms)
 * @example
 * const { data, isLoading } = useInstanceQuery(
 *   'exampleKey',
 *   fetchExampleData,
 *   1000 * 60 * 5, // 5분 동안 데이터 신선
 *   1000 * 60 * 10, // 10분 동안 캐시 유지
 * );
 */
export const useInstanceQuery = (
  key: string,
  queryFn: () => Promise<any>,
  staleTime: number,
  gcTime: number,
) => {
  return useQuery({
    queryKey: [key],
    queryFn,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
};
