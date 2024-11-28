/** 라우팅 path */
export const ROUTE = {
  MAIN: () => '/',
  DETAIL: (placeId: string | number) => `/detail/${placeId}`,
  SEARCH: () => '/search',
} as const;
