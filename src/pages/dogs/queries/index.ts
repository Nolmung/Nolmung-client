import { postDogs } from '@/service/apis/dog';
import { useMutation } from '@tanstack/react-query';
import { DogInfoType } from '@/service/apis/dog/index.type';
import { toast } from 'react-toastify';

/** 강아지 등록 쿼리문 */
export const usePostDogs = () => {
  return useMutation({
    mutationFn: (dogInfo: DogInfoType) => postDogs(dogInfo),
    onSuccess: () => {
      toast.success('반려견 등록이 완료되었습니다.');
    },
    onError: (error) => {
      console.error('반려견 등록 중 에러 발생:', error);
      toast.error('반려견 등록에 실패했습니다.');
    },
  });
};
