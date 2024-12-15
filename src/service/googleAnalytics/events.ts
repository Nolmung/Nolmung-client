// 이벤트 유형 정의
export const EVENTS = {
  MAIN: {
    MAP_ZOOM: {
      category: 'map_zoom',
      action: 'zoom',
    }, // 지도 줌 조정
    // 지도 이동
    MAP_MOVE: { category: 'map_move', action: '' },
    // 마커 클릭
    MARKER_CLICK: { category: 'click_marker', action: '' },
    // 검색 실행
    SEARCH: { category: 'search', action: '' },
    // 카테고리 선택
    SELECT_CATEGORY: { category: 'select_category', action: '' },
    // 필터 적용
    FILTER_APPLY: { category: 'filter_apply', action: '' },
    // 사용자 위치 버튼 클릭
    USER_LOCATION_BUTTON_CLICK: {
      category: 'user_location_button_click',
      action: '',
    },
    PAGE_EXIT: { category: 'page_exit', action: '' },
    MAP_CLICK: { category: 'map_click', action: '' },
    // 위치 정보 가져오기 성공
    USER_LOCATION_SUCCESS: { category: 'user_location_success', action: '' },
    // 위치 정보 가져오기 실패
    USER_LOCATION_FAILURE: { category: 'user_location_failure', action: '' },
    // 로그인 프롬프트 열림
    LOGIN_PROMPT_OPEN: { category: 'login_prompt_open', action: '' },
    // 로그인 프롬프트 닫힘
    LOGIN_PROMPT_CLOSE: { category: 'login_prompt_close', action: '' },
    // 바텀 시트 열림
    BOTTOM_SHEET_OPEN: { category: 'bottom_sheet_open', action: '' },
    // 바텀 시트 닫힘
    BOTTOM_SHEET_CLOSE: { category: 'bottom_sheet_close', action: '' },
    // 바텀 시트 높이 변경
    BOTTOM_SHEET_HEIGHT_CHANGE: {
      category: 'bottom_sheet_height_change',
      action: '',
    },
    // 바텀 카드 열림
    BOTTOM_CARD_OPEN: { category: 'bottom_card_open', action: '' },
    // 바텀 카드 닫힘
    BOTTOM_CARD_CLOSE: { category: 'bottom_card_close', action: '' },
  },
  DETAIL: {},
  REGISTDOGS: {},
  DOGEDIT: {},
  LOGIN: {},
  SIGNUP: {},
  MY: {},
  MY_FAVORITE: {},
  MY_REVIEW: {},
  RECOMMEND: {},
  TODAYMUNG: {},
  TODAYMUNGWRITE: {},
  TODAYMUNGDETAIL: {},
  TODAYMUNGEDIT: {},
  TODAYMUNG_PLACE_REGIST: {},
  TODAYMUNG_WRITE: {},
  USER_EDIT: {},
} as const;

// 이벤트 타입 정의
// `EVENTS` 객체 타입 자동 추출
export type NestedEventMap = {
  [key: string]: string | NestedEventMap;
};

// 이벤트 타입 추출 유틸리티 타입
export type EventAction<T extends NestedEventMap> =
  T extends Record<string, any>
    ? {
        [K in keyof T]: T[K] extends string ? T[K] : EventAction<T[K]>;
      }[keyof T]
    : never;
