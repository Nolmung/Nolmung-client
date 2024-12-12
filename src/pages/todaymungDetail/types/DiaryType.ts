import { MediaType } from '@/service/apis/diary/index.type';

export interface DogsType {
  dogId: number;
  dogName: string;
  dogProfileImageUrl: string;
}

export interface MediasType {
  mediaId?: number;
  mediaType: MediaType;
  mediaUrl: string;
}

export interface PlacesType {
  placeId: number;
  address: string;
  placeName: string;
  ratingAvg: number;
  roadAddress: string;
}

export interface DiaryType {
  userId: number;
  diaryId: number;
  title: string;
  content: string;
  publicYn: boolean;
  createdAt: string;
  dogs: DogsType[];
  medias: MediasType[];
  places: PlacesType[];
}
