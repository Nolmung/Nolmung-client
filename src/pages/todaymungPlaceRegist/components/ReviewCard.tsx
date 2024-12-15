import { PlaceCategory, ReviewKeyword } from '@/common/types';
import S from '@pages/todaymungPlaceRegist/styles/ReviewCard.style';
import { DogPaw, FilledStar, EmptyStar, PlusIcon } from '@assets/images/svgs';
import KEYWORDS from '@common/constants/reviewLabels';
import { useEffect, useState } from 'react';
import Button from '@common/components/button/Button';
import { useReviewStore } from '@pages/todaymungPlaceRegist/stores/reviewStore';
import { useTodayMungStore } from '@/pages/todaymungWrite/stores/todayMungStore';
import ReactGA from 'react-ga4';

interface ReviewCardProps {
  category: PlaceCategory;
  placeId: number;
  placeName: string;
  roadAddress: string;
  setKeywordReviewVisibleId: (id: number | null) => void;
}

function ReviewCard({
  setKeywordReviewVisibleId,
  category,
  placeId,
  placeName,
  roadAddress,
}: ReviewCardProps) {
  const { reviewlist, addReviewList, deleteReview } = useReviewStore();
  const { addPlaces } = useTodayMungStore();
  const review = reviewlist.find((review) => review.placeId === placeId);
  const [starRate, setStarRate] = useState<number>(review?.rating || 5);
  const [selectedLabels, setSelectedLabels] = useState<ReviewKeyword[]>(
    review?.labels || [],
  );
  const [isAddPlaceButtonDisabled, setIsAddPlaceButtonDisabled] =
    useState(false);

  const handleStarClick = (rate: number) => {
    ReactGA.event({
      category: 'Review Interaction',
      action: 'Rating Given',
      label: `Rating: ${rate}`, // 별점 점수
    });
    setStarRate(rate);
  };
  const handleAddPlaceButtonClick = () => {
    if (reviewlist.find((review) => review.placeId === placeId)) {
      deleteReview(placeId);
    } else if (!reviewlist.find((review) => review.placeId === placeId)) {
      addPlaces(placeId);
    }
    addReviewList({
      rating: starRate,
      placeId,
      category,
      labels: selectedLabels,
      placeName,
      roadAddress,
    });
    ReactGA.event({
      category: 'Review Interaction',
      action: 'Place Added',
      label: `Place: ${placeName}`,
    });
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
    ReactGA.event({
      category: 'Review Interaction',
      action: 'Keyword Selected',
      label: `Keyword: ${labelName}`,
    });
  };

  useEffect(() => {
    setIsAddPlaceButtonDisabled(selectedLabels.length === 0);
  }, [selectedLabels]);

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
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="90px"
          height="36px"
          borderRadius="10px"
          backgroundColor="#fff"
          color={isAddPlaceButtonDisabled ? '#5E5E5E' : '#080808'}
          border={
            isAddPlaceButtonDisabled ? '1px solid #5E5E5E' : '1px solid #17AA1A'
          }
          fontSize="13px"
          fontWeight={isAddPlaceButtonDisabled ? '400' : '600'}
          onClick={handleAddPlaceButtonClick}
          disabled={isAddPlaceButtonDisabled}
        >
          <PlusIcon
            width={14}
            strokeColor={isAddPlaceButtonDisabled ? '#5E5E5E' : '#17AA1A'}
          />
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
