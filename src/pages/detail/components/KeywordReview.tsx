import { S } from '../styles/keywordReview.style';

import { DogPaw } from '@/assets/images/svgs';

interface KeywordReviewProps {
  Keyword: string;
  KeywordCount: number;
  KeywordPercent: number;
}
function KeywordReview({
  Keyword,
  KeywordCount,
  KeywordPercent,
}: KeywordReviewProps) {
  console.log(KeywordPercent);
  return (
    <S.KeywordReviewWrapper>
      <S.KeywordContentBarWrapper>
        <S.KeywordReviewStatusBar width={KeywordPercent} />
        <S.KeywordContent>
          <DogPaw width={14} height={14} />
          {Keyword}
        </S.KeywordContent>
      </S.KeywordContentBarWrapper>
      {KeywordCount}
    </S.KeywordReviewWrapper>
  );
}

export default KeywordReview;
