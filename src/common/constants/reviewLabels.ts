import { PlaceCategory } from '../types';

const KEYWORDS: Record<
  PlaceCategory | 'COMMON',
  { readonly id: number; readonly content: string }[]
> = {
  COMMON: [
    { id: 1, content: '분위기가 좋아요' },
    { id: 2, content: '주차하기 편해요' },
    { id: 3, content: '조용해요' },
    { id: 4, content: '오래 머무르기 좋아요' },
  ],
  RESTAURANT: [
    { id: 5, content: '음식이 맛있어요' },
    { id: 6, content: '비싼만큼 가치있어요' },
    { id: 7, content: '가성비가 좋아요' },
  ],
  CAFE: [
    { id: 8, content: '커피가 맛있어요' },
    { id: 9, content: '매장이 넓어요' },
    { id: 10, content: '강아지용 메뉴가 있어요' },
  ],
  MUSEUM: [
    { id: 11, content: '유익해요' },
    { id: 12, content: '설명이 잘 되어있어요' },
    { id: 13, content: '전시 테마가 재미있어요' },
  ],
  GALLERY: [
    { id: 11, content: '유익해요' },
    { id: 12, content: '설명이 잘 되어있어요' },
    { id: 13, content: '전시 테마가 재미있어요' },
  ],
  PARK: [
    { id: 14, content: '공간이 넓어요' },
    { id: 15, content: '놀 거리가 많아요' },
    { id: 16, content: '깨끗해요' },
  ],
  PLAYGROUND: [
    { id: 14, content: '공간이 넓어요' },
    { id: 15, content: '놀 거리가 많아요' },
    { id: 16, content: '깨끗해요' },
  ],
  TRAVEL: [
    { id: 17, content: '사진이 잘 나와요' },
    { id: 18, content: '뷰가 좋아요' },
    { id: 19, content: '산책하기 좋아요' },
  ],
  ACCOMMODATION: [
    { id: 20, content: '깨끗해요' },
    { id: 21, content: '물놀이하기 좋아요' },
    { id: 22, content: '방음이 잘돼요' },
  ],
};

export default KEYWORDS;
