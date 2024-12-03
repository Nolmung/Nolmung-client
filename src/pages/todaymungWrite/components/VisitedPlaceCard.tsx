import { FaStar } from 'react-icons/fa';
import S from '../styles/VisitedPlaceCard.style';

interface VisitedPlaceCardProps {
  place_name: string;
  road_address: string;
  my_rate: number;
}

function VisitedPlaceCard({
  place_name,
  road_address,
  my_rate,
}: VisitedPlaceCardProps) {
  return (
    <S.PlaceCard>
      <S.PlaceTitleRateWrapper>
        <S.PlaceTitle>{place_name}</S.PlaceTitle>
        <S.PlaceAverageRate>
          <FaStar size="16" color="#F4E600" /> {my_rate}
        </S.PlaceAverageRate>
      </S.PlaceTitleRateWrapper>
      <S.PlaceAddress>{road_address} </S.PlaceAddress>
    </S.PlaceCard>
  );
}

export default VisitedPlaceCard;
