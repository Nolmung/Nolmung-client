import { instance } from '@service/apis';
import { EditDiaryRequest, PostDiaryRequest } from './index.type';

export const getTodaymungList = async () => {
  const response = await instance.get('/diary');
  return response.data;
};

export const postTodaymung = async (todaymung: PostDiaryRequest) => {
  const response = await instance.post('/diary', todaymung);
  return response.status;
};


export const patchTodaymung = async (todaymung: EditDiaryRequest, diaryId: number) => {
  const response = await instance.patch(`/diary/${diaryId}`, todaymung);
  return response.status;
};


