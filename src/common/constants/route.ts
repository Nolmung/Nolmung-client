/** 라우팅 path */
export const ROUTE = {
  MAIN: () => '/',
  TODAYMUNG: () => '/todaymung',
  DETAIL: (placeId: string | number) => `/detail/${placeId}`,
  LOGIN: () => '/login',
  SIGNUP: () => `/signUp`,
  SEARCH: () => '/search',
  TODAYMUNG_WIRTE: () => '/todaymung/write',
  TODAYMUNG_PLACE_REGIST: () => '/todaymung/placeregist',
} as const;
