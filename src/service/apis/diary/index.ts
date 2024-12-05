import { instance } from '@service/apis';

export const getTodaymungList = async () => {
  const response = await instance.get('/diary');
  return response.data;
};
