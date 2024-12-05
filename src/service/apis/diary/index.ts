import { instance } from '@service/apis';

export const getTodaymungList = async () => {
  const response = await instance.get('/diary');
  try {
    console.log('성공');
  } catch (error) {
    console.error('실패', error);
  }
  return response.data;
};
