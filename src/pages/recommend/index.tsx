import { placeMap } from '@/mocks/data/placeMap';
import RecommendCard from './components/RecommendCard';
import S from './styles/index.style';

function Recommend() {
  return (
    <S.Wrapper>
      <RecommendCard
        title="효링디링님이 좋아할 만한 공간"
        explanation="개발자가 피땀흘려 고른 공간"
        data={placeMap}
      />
      <RecommendCard
        title="효링디링님 근처 핫 플레이스"
        explanation="옆집 강아지들은 이미 다 가본데라고?"
        data={placeMap}
      />
      <RecommendCard
        title="중형견이라면 다 가본 곳 !"
        explanation="장미랑 비슷한 친구들을 만날 수 있어요 !"
        data={placeMap}
      />
      <RecommendCard
        title="다른 집사들이 좋아요를 많이 누른 공간"
        explanation="아니 글쎄 ~ 여기가 그렇게 핫플이래~"
        data={placeMap}
      />
    </S.Wrapper>
  );
}

export default Recommend;
