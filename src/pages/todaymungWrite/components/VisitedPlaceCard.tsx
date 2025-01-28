import S from '../styles/VisitedPlaceCard.style';
import { CATEGORY_OPTIONS } from '@/pages/main/constants/categoryBar';
import { AllCategory } from '@/common/types';
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
  const selectedOption = CATEGORY_OPTIONS.find(
    (option) => option.value === category,
  );

  return (
    <S.PlaceCard aria-label={placeName + ' 방문한 장소'}>
      <S.PlaceTitleRateWrapper>
        <S.PlaceWrapper
          aria-label={
            '장소명: ' +
            placeName +
            ' 별점: ' +
            rating +
            '점' +
            ' 카테고리: ' +
            category +
            ' 주소: ' +
            roadAddress
          }
        >
          <S.PlaceIconWrapper>
            {selectedOption?.icon && (
              <selectedOption.icon width={14} height={14} />
            )}
          </S.PlaceIconWrapper>
          <S.PlaceTitle>{placeName}</S.PlaceTitle>
        </S.PlaceWrapper>
        <S.PlaceAverageRate>
          <FilledStar width={14} />
          {rating}
        </S.PlaceAverageRate>
      </S.PlaceTitleRateWrapper>
      <S.PlaceAddress>{roadAddress} </S.PlaceAddress>
    </S.PlaceCard>
  );
}

export default VisitedPlaceCard;
