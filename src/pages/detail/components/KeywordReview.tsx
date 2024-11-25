import * as S from '../styles/keywordReview.style';

import { DogPaw } from '@/assets/images/svgs';

interface KeywordReviewProps {
  Keyword: string;
  KeywordCount: number;
}
function KeywordReview({ Keyword, KeywordCount }: KeywordReviewProps) {
  return (
    <S.KeywordReviewWrapper>
      <S.KeywordReviewStatus width={KeywordCount}>
        <DogPaw width={14} height={14} />
        {Keyword}
      </S.KeywordReviewStatus>
      {KeywordCount}
    </S.KeywordReviewWrapper>
  );
}

export default KeywordReview;
