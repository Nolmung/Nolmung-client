import { PlaceCategory } from '../types';

const KEYWORDS: Record<
  PlaceCategory | 'COMMON',
  { readonly labelId: number; readonly labelName: string }[]
> = {
  COMMON: [
    { labelId: 1, labelName: '분위기가 좋아요' },
    { labelId: 2, labelName: '주차하기 편해요' },
    { labelId: 3, labelName: '조용해요' },
    { labelId: 4, labelName: '오래 머무르기 좋아요' },
  ],
  RESTAURANT: [
    { labelId: 5, labelName: '음식이 맛있어요' },
    { labelId: 6, labelName: '비싼만큼 가치있어요' },
    { labelId: 7, labelName: '가성비가 좋아요' },
  ],
  CAFE: [
    { labelId: 8, labelName: '커피가 맛있어요' },
    { labelId: 9, labelName: '매장이 넓어요' },
    { labelId: 10, labelName: '강아지용 메뉴가 있어요' },
  ],
  MUSEUM: [
    { labelId: 11, labelName: '유익해요' },
    { labelId: 12, labelName: '설명이 잘 되어있어요' },
    { labelId: 13, labelName: '전시 테마가 재미있어요' },
  ],
  ARTGALLERY: [
    { labelId: 11, labelName: '유익해요' },
    { labelId: 12, labelName: '설명이 잘 되어있어요' },
    { labelId: 13, labelName: '전시 테마가 재미있어요' },
  ],
  PARK: [
    { labelId: 14, labelName: '공간이 넓어요' },
    { labelId: 15, labelName: '놀 거리가 많아요' },
    { labelId: 16, labelName: '깨끗해요' },
  ],
  PLAYGROUND: [
    { labelId: 14, labelName: '공간이 넓어요' },
    { labelId: 15, labelName: '놀 거리가 많아요' },
    { labelId: 16, labelName: '깨끗해요' },
  ],
  TRAVEL: [
    { labelId: 17, labelName: '사진이 잘 나와요' },
    { labelId: 18, labelName: '뷰가 좋아요' },
    { labelId: 19, labelName: '산책하기 좋아요' },
  ],
  ACCOMMODATION: [
    { labelId: 20, labelName: '깨끗해요' },
    { labelId: 21, labelName: '물놀이하기 좋아요' },
    { labelId: 22, labelName: '방음이 잘돼요' },
  ],
};

export default KEYWORDS;
