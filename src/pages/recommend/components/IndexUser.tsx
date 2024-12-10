import S from '../styles/index.style';
import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';
import {
  useRecommendBookmarks,
  useRecommendNearby,
  useRecommendSimilarBookmarks,
  useRecommendWeight,
} from '../queries';
import { useGetUser } from '../../my/hooks';
import Lottie from 'lottie-react';
import SkeletonLottie from '@/assets/lottie/SkeletonLottie.json';
import RecommendCard from './RecommendCard';

function UserRecommend() {
  useSetDocumentTitle('추천');
  const {
    data: weightData,
    isLoading: weightLoading,
    isError: weightError,
  } = useRecommendWeight();
  const {
    data: similarBookmarks,
    isLoading: similarLoading,
    isError: similarError,
  } = useRecommendSimilarBookmarks();
  const {
    data: nearByData,
    isLoading: nearbyLoading,
    isError: nearbyError,
  } = useRecommendNearby();
  const {
    data: bookmarks,
    isLoading: bookmarksLoading,
    isError: bookmarkError,
  } = useRecommendBookmarks();
  const {
    data: userInfo,
    isLoading: userLoading,
    isError: userError,
  } = useGetUser();

  if (
    userLoading ||
    bookmarksLoading ||
    weightLoading ||
    similarLoading ||
    nearbyLoading
  ) {
    return <Lottie animationData={SkeletonLottie} height={200} width={200} />;
  }

  if (
    userError ||
    bookmarkError ||
    weightError ||
    similarError ||
    nearbyError
  ) {
    return <div>Error...</div>;
  }

  return (
    <S.Wrapper>
      {similarBookmarks.length > 0 && (
        <RecommendCard
          title={`${userInfo?.userNickname} 님이 좋아할 만한 공간`}
          explanation="개발자가 피땀흘려 고른 공간"
          data={similarBookmarks}
        />
      )}
      {nearByData.length > 0 && (
        <RecommendCard
          title={`${userInfo?.userNickname} 님 근처 핫 플레이스`}
          explanation="옆집 강아지들은 이미 다 가본데라고?"
          data={nearByData}
        />
      )}
      {bookmarks.length > 0 && (
        <RecommendCard
          title="다른 집사들이 좋아요를 많이 누른 공간"
          explanation="아니 글쎄 ~ 여기가 그렇게 핫플이래~"
          data={bookmarks}
        />
      )}
      {weightData.length > 0 && (
        <RecommendCard
          title="우리 아이 친구들이 다 가본 곳"
          explanation="우리 아이들이 갈 수 있는 곳을 추천해드려요"
          data={weightData}
        />
      )}
    </S.Wrapper>
  );
}

export default UserRecommend;
