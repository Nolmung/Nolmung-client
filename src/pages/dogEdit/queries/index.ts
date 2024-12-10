import { postDogs, patchDogs, deleteDogs } from '@/service/apis/dog';
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

export const usePatchDogs = () => {
  return useMutation({
    mutationFn: (dogId: number) => patchDogs(dogId),
    onSuccess: () => {
      alert('반려견 정보 수정이 완료되었습니다.');
    },
    onError: (error) => {
      console.error('반려견 정보 수정 중 에러 발생:', error);
      alert('반려견 정보 수정에 실패했습니다.');
    },
  });
};

export const useDeleteDogs = () => {
  return useMutation({
    mutationFn: (dogId: number) => deleteDogs(dogId),
    onSuccess: () => {
      alert('반려견 삭제가 완료되었습니다.');
    },
    onError: (error) => {
      console.error('반려견 삭제 중 에러 발생:', error);
      alert('반려견 삭제에 실패했습니다.');
    },
  });
};
