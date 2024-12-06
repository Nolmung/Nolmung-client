import { instance } from '@service/apis';

export const getTodaymungDetail = async (diaryId: number) => {
  const response = await instance.get(`/diary/public/${diaryId}`);
  return response.data;
};
