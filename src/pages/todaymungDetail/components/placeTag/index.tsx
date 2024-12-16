import { S } from '../../styles/PlaceTagCard.style';
import { LocationPinIcon } from '@assets/images/svgs';
import { PlacesType } from '../../types/DiaryType';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';

interface PlaceCardProps {
  data: PlacesType;
}

const PlaceTagCard = ({ data }: PlaceCardProps) => {
  const navigate = useNavigate();
  const handleLocationClick = () => {
    navigate(ROUTE.DETAIL(data.placeId));
  };
  return (
    <S.Wrapper onClick={handleLocationClick}>
      <LocationPinIcon width={20} height={20} />
      <S.LocationName>{data.placeName}</S.LocationName>
    </S.Wrapper>
  );
};

export default PlaceTagCard;
