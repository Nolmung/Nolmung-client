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
    onSuccess: (data) => {
      if (data.status === 'SUCCESS') {
        console.log('즐겨찾기 삭제 성공');
        queryClient.invalidateQueries({
          queryKey: ['bookmarks', 'postDetail'],
        }); // 쿼리를 무효화하고 다시 조회
      } else if (data.status === 'NOT_FOUND') {
        console.log('즐겨찾기 삭제 실패');
      } else {
        console.log('즐겨찾기 삭제 실패');
      }
    },
    onError: () => {
      console.log('즐겨찾기 삭제에 실패했습니다.');
    },
  });
};
