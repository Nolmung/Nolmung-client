import axios from 'axios';
import { PlaceDetailResponse } from './index.type';

export const getPostDetail = async (
  placeId: string | number,
): Promise<PlaceDetailResponse> => {
  const response = await axios.get<PlaceDetailResponse>(
    `/place-details/${placeId}`,
  );
  return response.data;
};
