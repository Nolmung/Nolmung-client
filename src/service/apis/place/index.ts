import { instance } from '..';

export const getPostDetail = async (placeId: string | number) => {
  const response = await instance.get(`/places/details/${placeId}`);
  return response.data.data;
};
