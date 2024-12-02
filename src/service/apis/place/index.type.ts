import { Diary, PlaceCategory, PlacePrice, ReviewKeyword } from '@/common/types';

export interface PlaceDetailResponse {
  place_name: string; // 장소 이름
  category: string; // 카테고리
  place_img_url: string; // 장소 이미지 URL
  road_address: string; // 도로명 주소
  address: string; // 지번 주소
  phone: string; // 전화번호
  homepage_url: string; // 홈페이지 URL
  holiday: string; // 휴무일 정보
  open_hour: string; // 영업시간
  parkingYn: 'Y' | 'N'; // 주차 가능 여부
  price: PlacePrice; // 가격 정보
  accept_size: string; // 수용 가능 크기
  rule: string; // 제한 사항
  inpossibleYn: 'Y' | 'N'; // 실내 동반 가능 여부
  outpossibleYn: 'Y' | 'N'; // 실외 동반 가능 여부
  extra_price: string; // 추가 비용
  star_rating_avg: string; // 평균 별점
  review_count: number; // 리뷰 수
  latitude: string; // 위도
  longitude: string; // 경도
  labels: ReviewKeyword[]; // 라벨 배열
  diary: Diary[]; // 다이어리 배열
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
