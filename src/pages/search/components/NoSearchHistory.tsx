import { LiedownDog } from '@/assets/images/svgs';
import { S } from '../styles/NoSearchHistory.style';
function NoSearchHistory() {
  /** @Todo 검색 결과 없을떄 UI 디자인 필요 */
  return (
    <S.NoResultWrapper>
      <LiedownDog width={240} />
      <S.NoResultSubText>최근 검색 기록이 없다 멍!</S.NoResultSubText>
    </S.NoResultWrapper>
  );
}

export default NoSearchHistory;
