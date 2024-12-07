import S from '../styles/VisitedPlaceCard.style';
import { CATEGORY_OPTIONS } from '@/pages/main/constants/categoryBar';
import { AllCategory } from '@/common/types';
import React from 'react';
import { FilledStar } from '@/assets/images/svgs';

interface VisitedPlaceCardProps {
  placeName: string;
  roadAddress: string;
  rating: number;
  category: AllCategory;
}

function VisitedPlaceCard({
  placeName,
  roadAddress,
  rating,
  category,
}: VisitedPlaceCardProps) {
  return (
    <S.PlaceCard>
      <S.PlaceTitleRateWrapper>
        <S.PlaceIconWrapper>
          {CATEGORY_OPTIONS?.find((option) => option.value == category)?.icon &&
            React.createElement(
              CATEGORY_OPTIONS.find((option) => option.value === category)!
                .icon,
            )}
        </S.PlaceIconWrapper>
        <S.PlaceTitle>{placeName}</S.PlaceTitle>
        <S.PlaceAverageRate>
          <FilledStar width={16} />
          {rating}
        </S.PlaceAverageRate>
      </S.PlaceTitleRateWrapper>
      <S.PlaceAddress>{roadAddress} </S.PlaceAddress>
    </S.PlaceCard>
  );
}

export default VisitedPlaceCard;
