import { S } from './index.style';

interface NoResultUIProps {
  content: string;
}

function NoResulLiedownUI({ content }: NoResultUIProps) {
  return (
    <S.NoResultWrapper>
      <img src="/public/webps/LiedownDog.webp" width={240} />
      <S.NoResultText>{content}</S.NoResultText>
    </S.NoResultWrapper>
  );
}

function NoResultStandUI({ content }: NoResultUIProps) {
  return (
    <S.NoResultWrapper>
      <img src="/public/webps/StandBrownDog.webp" width={240} />
      <S.NoResultText>{content}</S.NoResultText>
    </S.NoResultWrapper>
  );
}

export { NoResulLiedownUI, NoResultStandUI };
