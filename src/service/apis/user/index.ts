import { instance } from '@service/apis';
import { BadgeType, GetDogsListResponse, GetUserBadgesResponse, GetUserResponse, UserType } from './index.types';
import { DogType } from '../dog/index.type';

/** 사용자 정보 조회 API */
export const getUser = async (): Promise<UserType> => {
  const response = await instance.get<GetUserResponse>('/users');
  if (response.data.status !== 'SUCCESS' || !response.data.data) {
    throw new Error('유효하지 않은 사용자 데이터입니다.');
  }
  return response.data.data; 
};

/** 반려견 정보 조회 API */
export const getDogsList = async (): Promise<DogType[]> => {
  const response = await instance.get<GetDogsListResponse>('/dogs/list');
  if (response.data.status !== 'SUCCESS' || !response.data.data) {
    throw new Error('유효하지 않은 사용자 데이터입니다.');
  }
  return response.data.data; 
};

/** 유저 뱃지 정보 조회 API */
export const getUserBadges = async () : Promise<BadgeType[]> => {
  const response = await instance.get<GetUserBadgesResponse>('/users/badges');
  if (response.data.status !== 'SUCCESS' || !response.data.data) {
    throw new Error('유효하지 않은 사용자 데이터입니다.');
  }
  return response.data.data;
}