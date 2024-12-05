import { DateCalendar } from '@mui/x-date-pickers';
import { MarkerType } from '@/pages/main/types';
import { instance } from '..';
import { PlaceRequestBody } from './index.type';
import { PlaceCategory } from '@/common/types';
import { DogSize } from '../user/index.types';

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
  console.log(response.data);
  return response.data.data;
};

export interface PlaceFilterRequestBody {
  latitude: number;
  longitude: number;
  maxLatitude: number;
  maxLongitude: number;

  category?: PlaceCategory;
  acceptSize?: DogSize;
  ratingAvg?: number;
  isBookmarked?: boolean;
}

export const getPlacesFilter = async (
  params: PlaceFilterRequestBody,
): Promise<MarkerType[]> => {
  const response = await instance.get('/places/filter', {
    params: {
      latitude: params.latitude,
      longitude: params.longitude,
      maxLatitude: params.maxLatitude,
      maxLongitude: params.maxLongitude,
      category: params.category,
    },
  });
  return response.data.data;
};
