import { S } from './index.style';

interface NoResultUIProps {
  content: string;
}

/** 작성한 오늘멍이 없을 때 보여지는 컴포넌트 */
function NoResulLiedownUI({ content }: NoResultUIProps) {
  return (
    <S.NoResultWrapper>
      <img src="/webps/LiedownDog.webp" width={240} />
      <S.NoResultText>{content}</S.NoResultText>
    </S.NoResultWrapper>
  );
}

/** 작성한 리뷰가 없을 때 보여지는 컴포넌트 */
function NoResultStandUI({ content }: NoResultUIProps) {
  return (
    <S.NoResultWrapper>
      <img src="/webps/StandBrownDog.webp" width={240} />
      <S.NoResultText>{content}</S.NoResultText>
    </S.NoResultWrapper>
  );
}

export { NoResulLiedownUI, NoResultStandUI };
