import { useReviewStore } from '@/pages/todaymungPlaceRegist/stores/reviewStore';

const useIsReviewEmpty = (): boolean => {
  const { reviewlist } = useReviewStore();
  return reviewlist?.length === 0;
};

export default useIsReviewEmpty;
