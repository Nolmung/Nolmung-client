import { PlaceCategory } from '@/common/types';
import S from '../styles/ReviewCard.style';
import { DogPaw, FilledStar, EmptyStar } from '@/assets/images/svgs';
import KEYWORDS from '@/common/constants/reviewLabels';
import { useState } from 'react';
import Button from '@/common/components/button/Button';
interface ReviewCardProps {
  category: PlaceCategory;
}

interface ReviewKeyword {
  id: number;
  content: string;
}
function ReviewCard({ category }: ReviewCardProps) {
  const [starRate, setStarRate] = useState<number>(5);
  const [selectedKeywords, setSelectedKeywords] = useState<ReviewKeyword[]>([]);
  const handleStarClick = (rate: number) => {
    setStarRate(rate);
  };
  const handleAddPlaceButtonClick = () => {};
  const handleReviewKeywordClick = (id: number, content: string) => {
    setSelectedKeywords([...selectedKeywords, { id, content }]);
  };
  return (
    <S.Wrapper>
      <S.RateAddPlaceButtonWrapper>
        <S.RateWrapper>
          <S.StarIcons>
            {starRate >= 1 ? (
              <FilledStar onClick={() => handleStarClick(1)} width={20} />
            ) : (
              <EmptyStar onClick={() => handleStarClick(1)} width={20} />
            )}
            {starRate >= 2 ? (
              <FilledStar onClick={() => handleStarClick(2)} width={20} />
            ) : (
              <EmptyStar onClick={() => handleStarClick(2)} width={20} />
            )}{' '}
            {starRate >= 3 ? (
              <FilledStar onClick={() => handleStarClick(3)} width={20} />
            ) : (
              <EmptyStar onClick={() => handleStarClick(3)} width={20} />
            )}{' '}
            {starRate >= 4 ? (
              <FilledStar onClick={() => handleStarClick(4)} width={20} />
            ) : (
              <EmptyStar onClick={() => handleStarClick(4)} width={20} />
            )}{' '}
            {starRate >= 5 ? (
              <FilledStar onClick={() => handleStarClick(5)} width={20} />
            ) : (
              <EmptyStar onClick={() => handleStarClick(5)} width={20} />
            )}
          </S.StarIcons>
          <S.Rate>{starRate}</S.Rate>
        </S.RateWrapper>
        <Button
          width="76px"
          height="34px"
          borderRadius="50px"
          backgroundColor="#080808"
          color="#ffffff"
          fontSize="13px"
          fontWeight="600"
          onClick={handleAddPlaceButtonClick}
        >
          장소 추가
        </Button>
      </S.RateAddPlaceButtonWrapper>
      <S.KeywordWrapper>
        {KEYWORDS.COMMON.map((keyword) => (
          <S.ReviewButton isActive={true}>
            <DogPaw width={14} />
            {keyword.content}
          </S.ReviewButton>
        ))}
        {KEYWORDS[category].map((keyword) => (
          <S.ReviewButton isActive={false}>
            <DogPaw width={14} />
            {keyword.content}
          </S.ReviewButton>
        ))}
      </S.KeywordWrapper>
    </S.Wrapper>
  );
}

export default ReviewCard;
