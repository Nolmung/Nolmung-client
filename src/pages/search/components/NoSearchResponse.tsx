import { TodayMungNoListIcon } from '@/assets/images/svgs';
import { S } from '../styles/NoSearchHistory.style';
function NoSearchResponse() {
  /** @Todo 검색 결과 없을떄 UI 디자인 필요 */
  return (
    <S.NoResultWrapper>
      <TodayMungNoListIcon width={200} />
      <S.NoResultSubText>검색 결과가 없다 멍 !</S.NoResultSubText>
    </S.NoResultWrapper>
  );
}

export default NoSearchResponse;
