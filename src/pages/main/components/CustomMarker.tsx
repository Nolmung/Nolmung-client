// import { CafeMarker } from '@/assets/images/svgs';
import S from '@/pages/main/styles/CustomMarker.styles';
import { match } from 'ts-pattern';
import {
  FoodMarker,
  CafeMarker,
  PlaygroundMarker,
  AmusementparkMarker,
  HotelMarker,
  TravelMarker,
  MuseumMarker,
  GalleryMarker,
  DefaultMarker,
} from '@/assets/images/svgs';

interface CustomMarkerProps {
  placeId: string;
  name: string;
  category: string;
}

function CustomMarker({ placeId, name, category }: CustomMarkerProps) {
  const IconComponent = match(category)
    .with('food', () => FoodMarker)
    .with('cafe', () => CafeMarker)
    .with('playground', () => PlaygroundMarker)
    .with('amusementpark', () => AmusementparkMarker)
    .with('hotel', () => HotelMarker)
    .with('travel', () => TravelMarker)
    .with('museum', () => MuseumMarker)
    .with('gallery', () => GalleryMarker)
    .otherwise(() => DefaultMarker);

  return (
    <S.Wrapper>
      <S.Name>{name}</S.Name>
      <S.IconWrapper>
        <IconComponent width={24} />
      </S.IconWrapper>
    </S.Wrapper>
  );
}

export default CustomMarker;
