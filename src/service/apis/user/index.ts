import { instance } from '@service/apis';
import { GetDogsListResponse, GetUserResponse, UserType } from './index.types';
import { DogType } from '../dog/index.type';

export const getUser = async (): Promise<UserType> => {
  const response = await instance.get<GetUserResponse>('/users');
  if (response.data.status !== 'SUCCESS' || !response.data.data) {
    throw new Error('유효하지 않은 사용자 데이터입니다.');
  }
  // 'SUCCESS'이고 'data'가 존재하는 경우만 반환
  return response.data.data; 
};

export const getDogsList = async (): Promise<DogType[]> => {
  const response = await instance.get<GetDogsListResponse>('/dogs/list');
  if (response.data.status !== 'SUCCESS' || !response.data.data) {
    throw new Error('유효하지 않은 사용자 데이터입니다.');
  }
  // 'SUCCESS'이고 'data'가 존재하는 경우만 반환
  return response.data.data; 
};

