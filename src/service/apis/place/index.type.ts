import { Diary, PlaceCategory, PlacePrice } from '@/common/types';
import { DogSize } from '../user/index.types';

export interface PlaceResponseLabel {
  labelId: number;
  labelCount: number;
}
export interface PlaceDetailResponse {
  placeId: number; // 장소 ID
  placeName: string; // 장소 이름
  category: string; // 카테고리
  placeImgUrl: string; // 장소 이미지 URL
  roadAddress: string; // 도로명 주소
  address: string; // 지번 주소
  phone: string; // 전화번호
  homepageUrl: string; // 홈페이지 URL
  holiday: string; // 휴무일 정보
  openHour: string; // 영업시간
  parkingYn: 'Y' | 'N'; // 주차 가능 여부
  price: PlacePrice; // 가격 정보
  extraPrice: string; // 추가 비용
  acceptSize: DogSize; // 수용 가능 크기
  rule: string; // 제한 사항
  inPossibleYn: 'Y' | 'N'; // 실내 동반 가능 여부
  outPossibleYn: 'Y' | 'N'; // 실외 동반 가능 여부
  reviewCount: number; // 리뷰 수
  latitude: string; // 위도
  longitude: string; // 경도
  labels: PlaceResponseLabel[]; // 라벨 배열
  diaries: Diary[]; // 다이어리 배열
  starRatingAvg: number; // 별점 평균
  isBookmarked: boolean; // 북마크 여부
}

export interface MapPlace {
  placeId: number;
  placeName: string;
  category: PlaceCategory;
  roadAddress: string;
  placeImgUrl: string;
  starRatingAvg: number;
  reviewCount: number;
  latitude: number;
  longitude: number;
  placeImageUrl?: string;
  Address?: string;
  isBookmarked?: boolean;
  acceptSize?: DogSize;
}

export interface PlaceRequestBody {
  latitude: number;
  longitude: number;
  maxLatitude: number;
  maxLongitude: number;
}

export interface PlaceSearchResponse {
  placeId: number;
  placeName: string;
  category: PlaceCategory;
  roadAddress: string;
  placeImgUrl: string;
  starRatingAvg: number;
  reviewCount: number;
  latitude: number;
  longitude: number;
  acceptSize?: DogSize;
  isBookmarked: boolean;
}
