import { MarkerType } from '@/pages/main/types';
import { instance } from '..';
import { PlaceRequestBody, PlaceSearchResponse } from './index.type';

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
