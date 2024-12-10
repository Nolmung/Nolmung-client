import { instance } from '..';
import { DogsResponse, DogInfoType } from './index.type';

export const getDogs = async (): Promise<DogsResponse> => {
  const response = await instance.get('/dogs/list');
  return response.data;
};

export const postDogs = async (dogInfo: DogInfoType): Promise<number> => {
  const response = await instance.post('/dogs', dogInfo);
  return response.status;
};

export const putDogs = async (dogId: number,dogInfo: DogInfoType): Promise<number> => {
  const response = await instance.put(`/dogs?dogId=${dogId}`,dogInfo);
  return response.status;
};

export const deleteDogs = async (dogId: number): Promise<number> => {
  const response = await instance.delete(`/dogs?dogId=${dogId}`);
  return response.status;
};
