/** 라우팅 path */
export const ROUTE = {
  MAIN: () => '/',
  TODAYMUNG: () => '/todaymung',
  DETAIL: (placeId: string | number) => `/detail/${placeId}`,
  LOGIN: () => '/login',
  SIGNUP: () => `/signUp`,
  SEARCH: () => '/search',
  TODAYMUNG_DETAIL: (diaryId: string | number) => `todaymung/detail/${diaryId}`,
  TODAYMUNG_WRITE: () => '/todaymung/write',
  TODAYMUNG_PLACE_REGIST: () => '/todaymung/placeregist',
  MY: () => '/my',
  MYFAVORITE: () => '/my/favorite',
  PLACE_RECOMMEND: () => '/recommend',
} as const;
