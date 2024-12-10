import {
  getRecommendBookmarks,
  getRecommendNearby,
  getRecommendSimilarBookmarks,
  getRecommendWeight,
} from '@/service/apis/recommend';
import { useQuery } from '@tanstack/react-query';

export const useRecommendWeight = () => {
  return useQuery({
    queryKey: ['recommendWeight'],
    queryFn: getRecommendWeight,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
};

export const useRecommendSimilarBookmarks = () => {
  return useQuery({
    queryKey: ['recommendSimilarBookmarks'],
    queryFn: getRecommendSimilarBookmarks,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
};

export const useRecommendNearby = () => {
  return useQuery({
    queryKey: ['recommendNearby'],
    queryFn: getRecommendNearby,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
};

export const useRecommendBookmarks = () => {
  return useQuery({
    queryKey: ['recommendBookmarks'],
    queryFn: getRecommendBookmarks,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
};
