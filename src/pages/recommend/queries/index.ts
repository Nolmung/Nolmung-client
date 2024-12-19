import {
  getRecommendBookmarks,
  getRecommendNearby,
  getRecommendSimilarBookmarks,
  getRecommendWeight,
} from '@service/apis/recommend';
import { useInstanceQuery } from '@common/hooks/useInstanceQuery';

export const useRecommendWeight = () =>
  useInstanceQuery(
    'recommendWeight',
    getRecommendWeight,
    1000 * 60 * 60 * 24,
    1000 * 60 * 60 * 24,
  );

export const useRecommendSimilarBookmarks = () =>
  useInstanceQuery(
    'recommendSimilarBookmarks',
    getRecommendSimilarBookmarks,
    1000 * 60 * 60 * 24,
    1000 * 60 * 60 * 24,
  );

export const useRecommendNearby = () =>
  useInstanceQuery(
    'recommendNearby',
    getRecommendNearby,
    1000 * 60 * 60 * 24,
    1000 * 60 * 60 * 24,
  );

export const useRecommendBookmarks = () =>
  useInstanceQuery(
    'recommendBookmarks',
    getRecommendBookmarks,
    1000 * 60 * 60 * 24,
    1000 * 60 * 60 * 24,
  );
