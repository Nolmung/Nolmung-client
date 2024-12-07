import Categories from '../constants/categories';
/** Label 타입 정의 */
export interface ReviewKeyword {
  labelId: number; // 라벨 ID
  labelName: string;
}

/** 오늘멍 타입 정의 */
export interface Diary {
  diaryId: number; // 오늘멍 ID
  diaryName: string; // 오늘멍 제목
  diaryContent: string; // 오늘멍 내용
  diaryWriter: string; // 작성자
  createdAt: string; // 작성 날짜
  imageUrl: string; // 이미지 URL
  writerUrlImage: string; // 작성자 프로필 이미지 URL
}

export type PlacePrice = '변동' | '없음' | string;

/** 좌표 타입 정의 (위도, 경도) */
export interface LatLng {
  latitude: number;
  longitude: number;
}

export type PlaceCategory = (typeof Categories)[number];

export type BookmarkCategory = PlaceCategory | 'ALL';

export type AllCategory = PlaceCategory | 'bookmarked' | 'visited';

export type SVGComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export interface Bookmark {
  bookmarkId: number;
  category: PlaceCategory;
  placeImageUrl: string;
  roadAddress: string;
  name: string;
  ratingAvg: number;
  ratingCount: number;
}