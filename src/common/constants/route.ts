/** 라우팅 path */
export const ROUTE = {
  MAIN: () => '/',
  TODAYMUNG: () => '/todaymung',
  DETAIL: (placeId: string | number) => `/detail/${placeId}`,
  LOGIN: () => '/login',
  SIGNUP: () => `/signUp`,
  SEARCH: () => '/search',
  TODAYMUNG_WIRTE: () => '/todayMung/write',
  TODAYMUNG_PLACE_REGISTER: () => '/todayMung/placeRegister',
  MYPAGE: () => '/mypage',
} as const;
