import { PlaceCategory } from '@/common/types';
import S from '@pages/todaymungPlaceRegist/styles/ReviewCard.style';
import { DogPaw, FilledStar, EmptyStar } from '@assets/images/svgs';
import KEYWORDS from '@common/constants/reviewLabels';
import { useState } from 'react';
import Button from '@common/components/button/Button';
import { useReviewStore } from '@pages/todaymungPlaceRegist/stores/reviewStore';
import { useTodayMungStore } from '@/pages/todaymungWrite/stores/todayMungStore';

interface ReviewCardProps {
  category: PlaceCategory;
  placeId: number;
  placeName: string;
  roadAddress: string;
  setKeywordReviewVisibleId: (id: number | null) => void;
}

interface Labels {
  labelId: number;
  labelName: string;
}

function ReviewCard({
  setKeywordReviewVisibleId,
  category,
  placeId,
  placeName,
  roadAddress,
}: ReviewCardProps) {
  const { reviewlist, addReviewList } = useReviewStore();
  const { addPlaces } = useTodayMungStore();
  const review = reviewlist.find((review) => review.placeId === placeId);
  const [starRate, setStarRate] = useState<number>(review?.rating || 5);
  const [selectedLabels, setSelectedLabels] = useState<Labels[]>(
    review?.labels || [],
  );

  const handleStarClick = (rate: number) => {
    setStarRate(rate);
  };
  const handleAddPlaceButtonClick = () => {
    addReviewList({
      rating: starRate,
      placeId,
      category,
      labels: selectedLabels,
      placeName,
      roadAddress,
    });
    addPlaces(placeId);
    setKeywordReviewVisibleId(null);
  };

  const handleReviewKeywordClick = (
    labelId: number,
    labelName: string,
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    e.stopPropagation();
    const labelExists = selectedLabels.some(
      (label) => label.labelId === labelId,
    );

    if (labelExists) {
      setSelectedLabels((prev) =>
        prev.filter((label) => label.labelId !== labelId),
      );
    } else {
      setSelectedLabels((prev) => [...prev, { labelId, labelName }]);
    }
  };

  return (
    <S.Wrapper>
      <S.RateAddPlaceButtonWrapper>
        <S.RateWrapper>
          <S.StarIcons>
            {[1, 2, 3, 4, 5].map((rate) =>
              starRate >= rate ? (
                <FilledStar
                  key={rate}
                  onClick={() => handleStarClick(rate)}
                  width={20}
                />
              ) : (
                <EmptyStar
                  key={rate}
                  onClick={() => handleStarClick(rate)}
                  width={20}
                />
              ),
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
          <S.ReviewButton
            onClick={(e) =>
              handleReviewKeywordClick(keyword.labelId, keyword.labelName, e)
            }
            isActive={selectedLabels.some(
              (label) => label.labelId === keyword.labelId,
            )}
          >
            <DogPaw width={14} />
            {keyword.labelName}
          </S.ReviewButton>
        ))}
        {KEYWORDS[category].map((keyword) => (
          <S.ReviewButton
            onClick={(e) =>
              handleReviewKeywordClick(keyword.labelId, keyword.labelName, e)
            }
            isActive={selectedLabels.some(
              (label) => label.labelId === keyword.labelId,
            )}
          >
            <DogPaw width={14} />
            {keyword.labelName}
          </S.ReviewButton>
        ))}
      </S.KeywordWrapper>
    </S.Wrapper>
  );
}

export default ReviewCard;
