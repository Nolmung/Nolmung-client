import { instance } from '..';

export const getRecommendWeight = async () => {
  const response = await instance.get('/recommend/weight');
  return response.data.data;
};

export const getRecommendSimilarBookmarks = async () => {
  const response = await instance.get('/recommend/similar/bookmarks');
  return response.data.data;
};
export const getRecommendNearby = async () => {
  const response = await instance.get('/recommend/nearby');
  return response.data.data;
};
export const getRecommendBookmarks = async () => {
  const response = await instance.get('/recommend/bookmarks');
  return response.data.data;
};
