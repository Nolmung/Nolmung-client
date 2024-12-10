import { instance } from '..';
import { DogsResponse, DogInfoType } from './index.type';

export const getDogs = async (): Promise<DogsResponse> => {
  const response = await instance.get('/dogs/list');
  return response.data;
};

export const postDogs = async (dogInfo: DogInfoType): Promise<number> => {
  const response = await instance.post('/users/dogs', dogInfo);
  return response.status;
};

export const patchDogs = async (dogId: number): Promise<number> => {
  const response = await instance.patch(`/users/dogs?dogId=${dogId}`);
  return response.status;
};

export const deleteDogs = async (dogId: number): Promise<number> => {
  const response = await instance.delete(`/users/dogs?dogId=${dogId}`);
  return response.status;
};