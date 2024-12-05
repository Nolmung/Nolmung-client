import {
  Diary,
  PlaceCategory,
  PlacePrice,
  ReviewKeyword,
} from '@/common/types';
import { DogSize } from '../user/index.types';

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
  labels: ReviewKeyword[]; // 라벨 배열
  diaries: Diary[]; // 다이어리 배열
  starRatingAvg: number; // 별점 평균
}

export interface MapPlace {
  place_id: number;
  place_name: string;
  category: PlaceCategory;
  road_address: string;
  place_img_url: string;
  star_rating_avg: number;
  review_count: number;
  latitude: number;
  longitude: number;
}

export interface PlaceRequestBody {
  latitude: number;
  longitude: number;
  maxLatitude: number;
  maxLongitude: number;
}