import RecommendCard from './components/RecommendCard';
import S from './styles/index.style';
import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';
import { useRecommendBookmarks } from './queries';
import {
  DogSizeRecommend,
  NearBy,
  PersonalRecommend,
} from '@/mocks/data/recommend';
import { MapPlace } from '@/service/apis/place/index.type';

function GuestRecommend() {
  useSetDocumentTitle('추천');

  const {
    data: bookmarks,
    isLoading: bookmarksLoading,
    isError: bookmarkError,
  } = useRecommendBookmarks();

  if (bookmarksLoading) {
    return <div>Loading...</div>;
  }

  if (bookmarkError) {
    return <div>Error...</div>;
  }

  return (
    <S.Wrapper>
      {bookmarks.length > 0 && (
        <RecommendCard
          title="다른 집사들이 좋아요를 많이 누른 공간"
          explanation="아니 글쎄 ~ 여기가 그렇게 핫플이래~"
          data={bookmarks}
        />
      )}
      <RecommendCard
        title={`사용자 님이 좋아할 만한 공간`}
        explanation="개발자가 피땀흘려 고른 공간"
        data={PersonalRecommend as MapPlace[]}
      />
      <RecommendCard
        title={`사용자 님 근처 핫 플레이스`}
        explanation="옆집 강아지들은 이미 다 가본데라고?"
        data={NearBy as MapPlace[]}
      />
      <RecommendCard
        title="우리 아이 친구들이 다 가본 곳"
        explanation="우리 아이들이 갈 수 있는 곳을 추천해드려요"
        data={DogSizeRecommend as MapPlace[]}
      />
    </S.Wrapper>
  );
}

export default GuestRecommend;
