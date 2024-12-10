/** 라우팅 path */
export const ROUTE = {
  MAIN: () => '/',
  TODAYMUNG: () => '/todaymung',
  DETAIL: (placeId: string | number) => `/detail/${placeId}`,
  LOGIN: () => '/login',
  KAKAOCALLBACKHANDLER: () => '/oauth/kakao/callback',
  SIGNUP: () => `/signUp`,
  SEARCH: () => '/search',
  DOGS: () => '/dogs',
  DOGSEDIT: (dogId: string | number) => `/dogs/edit/${dogId}`,
  MY_REVIEW: () => '/my/review',
  TODAYMUNG_DETAIL: (diaryId: string | number) =>
    `/todaymung/detail/${diaryId}`,
  TODAYMUNG_WRITE: () => '/todaymung/write',
  TODAYMUNG_PLACE_REGIST: () => '/todaymung/placeregist',
  MY: () => '/my',
  MYFAVORITE: () => '/my/favorite',
  PLACE_RECOMMEND: () => '/recommend',
  TODAYMUNG_EDIT: (diaryId: string | number) => `/todaymung/edit/${diaryId}`,
  MY_DOGS: () => '/my/dogs',
} as const;
