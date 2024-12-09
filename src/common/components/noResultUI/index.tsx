import { LiedownDog, StandBrownDog } from '@/assets/images/svgs';
import { S } from './index.style';

interface NoResultUIProps {
  content: string;
}

function NoResulLiedownUI({ content }: NoResultUIProps) {
  return (
    <S.NoResultWrapper>
      <LiedownDog width={240} />
      <S.NoResultText>{content}</S.NoResultText>
    </S.NoResultWrapper>
  );
}

function NoResultStandUI({ content }: NoResultUIProps) {
  return (
    <S.NoResultWrapper>
      <StandBrownDog width={240} />
      <S.NoResultText>{content}</S.NoResultText>
    </S.NoResultWrapper>
  );
}

export { NoResulLiedownUI, NoResultStandUI };
