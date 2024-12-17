import { instance } from '@service/apis';

export const getTodaymungDetail = async (diaryId: number) => {
  const response = await instance.get(`/diary/public/${diaryId}`);
  return response.data;
};

export const deleteTodaymung = async (diaryId: number) => {
  const response = await instance.delete(`/diary/${diaryId}`);
  return response.status;
};

export const getTodaymungDetailReview = async (date: string) => {
  const response = await instance.get(`/reviews/type?date=${date}`);
  return response.data;
};
