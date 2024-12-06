import { FaStar } from 'react-icons/fa';
import S from '../styles/VisitedPlaceCard.style';

interface VisitedPlaceCardProps {
  placeName: string;
  roadAddress: string;
  rating: number;
}

function VisitedPlaceCard({
  placeName,
  roadAddress,
  rating,
}: VisitedPlaceCardProps) {
  return (
    <S.PlaceCard>
      <S.PlaceTitleRateWrapper>
        <S.PlaceTitle>{placeName}</S.PlaceTitle>
        <S.PlaceAverageRate>
          <FaStar size="16" color="#F4E600" /> {rating}
        </S.PlaceAverageRate>
      </S.PlaceTitleRateWrapper>
      <S.PlaceAddress>{roadAddress} </S.PlaceAddress>
    </S.PlaceCard>
  );
}

export default VisitedPlaceCard;
