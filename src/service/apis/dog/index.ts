import { instance } from '..';
import { DogsResponse } from './index.type';

export const getDogs = async (): Promise<DogsResponse> => {
  const response = await instance.get('/dogs/list');
  console.log('response', response);
  return response.data;
};
