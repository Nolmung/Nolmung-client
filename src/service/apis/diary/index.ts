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


export const patchTodaymung = async (
  todaymung: EditDiaryRequest,
  diaryId: number,
) => {
  try {
    const response = await instance.patch(`/diary/${diaryId}`, todaymung);
    console.log('성공');
    return response.status;
  } catch (error) {
    console.log(diaryId);
    console.log(todaymung);
    console.log(error);
    throw error;
  }
};


