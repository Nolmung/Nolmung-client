import { Bookmark, BookmarkCategory } from '@/common/types';
import { deleteBookmarks, getBookmarks } from '@/service/apis/bookmarks';
import { DeleteBookmarksResponse } from '@/service/apis/bookmarks/index.type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetBookmarks = (currentCategory: BookmarkCategory) => {
  return useQuery<Bookmark[]>({
    queryKey: ['bookmarks', currentCategory],
    queryFn: () => getBookmarks(currentCategory),
  });
};

export const useDeleteBookmarks = () => {
  const queryClient = useQueryClient();
  return useMutation<DeleteBookmarksResponse, AxiosError, number>({
    mutationFn: (placeId: number) => deleteBookmarks(placeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['bookmarks'],
      });
    },
    onError: () => {
      console.log('즐겨찾기 삭제에 실패했습니다.');
    },
  });
};
