import { MarkerType } from '@/pages/main/types';
import { instance } from '..';
import { PlaceRequestBody, PlaceSearchResponse } from './index.type';
import { PlaceCategory } from '@/common/types';

export const getPostDetail = async (placeId: string | number) => {
  const response = await instance.get(`/places/details/${placeId}`);
  return response.data.data;
};

export const getPlacesMap = async (
  body: PlaceRequestBody,
): Promise<MarkerType[]> => {
  const response = await instance.get('/places/map', {
    params: {
      latitude: body.latitude,
      longitude: body.longitude,
      maxLatitude: body.maxLatitude,
      maxLongitude: body.maxLongitude,
    },
  });
  return response.data.data;
};

export interface PlaceFilterRequestBody {
  latitude: number;
  longitude: number;
  maxLatitude: number;
  maxLongitude: number;

  category?: PlaceCategory;
  isVisited?: boolean;
  isBookmarked?: boolean;
}

export const getPlacesSearch = async (
  keyword: string,
): Promise<PlaceSearchResponse[]> => {
  const response = await instance.get('/places/search', {
    params: {
      keyword,
    },
  });
  return response.data.data;
};

export const getPlacesFilter = async (
  params: PlaceFilterRequestBody,
): Promise<MarkerType[]> => {
  const {
    latitude,
    longitude,
    maxLatitude,
    maxLongitude,
    category,
    isVisited,
    isBookmarked,
  } = params;
  const response = await instance.get('/places/filter', {
    params: {
      latitude,
      longitude,
      maxLatitude,
      maxLongitude,
      //undefined일 경우 제외
      ...(category && { category }),
      ...(isVisited != undefined && { isVisited }),
      ...(isBookmarked != undefined && { isBookmarked }),
    },
  });
  return response.data.data;
};
