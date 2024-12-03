import { S } from '../../styles/PlaceTagCard.style';
import { LocationPinIcon } from '@assets/images/svgs';
import { PlacesType } from '../../types/DiaryType';

interface PlaceCardProps {
  data: PlacesType;
}

const PlaceTagCard = ({ data }: PlaceCardProps) => {
  return (
    <S.Wrapper>
      <LocationPinIcon width={20} height={20} />
      <S.LocationName>{data.placeName}</S.LocationName>
    </S.Wrapper>
  );
};

export default PlaceTagCard;
