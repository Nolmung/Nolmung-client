import { postBookmarks } from "@/service/apis/bookmarks";
import { PostBookmarksResponse } from "@/service/apis/bookmarks/index.type";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

/**@Todo 장소 정보에 즐겨찾기 여부 들어가면 해당 부분 수정 필요*/
export const usePostBookmarks = () => {
  return useMutation<PostBookmarksResponse, AxiosError, number>( {
    mutationFn: postBookmarks,
    onSuccess: (data) => {
      if (data.status === 'SUCCESS') {
        console.log('즐겨찾기 등록 성공');
      } else if (data.status === 'BAD_REQUEST') {
        console.log('이미 즐겨찾기에 등록된 장소입니다.');
      }
    },
    onError: () => {
      console.log('즐겨찾기 등록에 실패했습니다.');
    },
  });
};