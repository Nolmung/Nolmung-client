import { postDogs } from '@/service/apis/dog';
import { useMutation } from '@tanstack/react-query';
import { DogInfoType } from '@/service/apis/dog/index.type';

export const usePostDogs = () => {
  return useMutation({
    mutationFn: (dogInfo: DogInfoType) => postDogs(dogInfo),
    onSuccess: () => {
      alert('반려견 등록이 완료되었습니다.');
    },
    onError: (error) => {
      console.error('반려견 등록 중 에러 발생:', error);
      alert('반려견 등록에 실패했습니다.');
    },
  });
};


