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
  return (
    <S.KeywordReviewWrapper
      aria-label={`${Keyword} 키워드 리뷰 ${KeywordCount}개`}
    >
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
