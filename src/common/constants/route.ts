/** 라우팅 path */
export const ROUTE = {
  MAIN: () => '/',
  DETAIL: (placeId: string | number) => `/detail/${placeId}`,
  LOGIN: () => '/login',
  SIGNUP: () => `/signUp`,
  SEARCH: () => '/search',
  DOGS: () => '/dogs',
} as const;
