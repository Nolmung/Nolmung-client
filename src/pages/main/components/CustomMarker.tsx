import S from '@/pages/main/styles/CustomMarker.styles';
import { match } from 'ts-pattern';
import { PlaceCategory } from '@/common/types';
import Categories from '@/common/constants/categories';
import { MarkerIconMapping } from '../types';
import { DefaultMarker } from '@/assets/images/svgs';

interface CustomMarkerProps {
  placeId: number;
  name: string;
  category: PlaceCategory;
}

function CustomMarker({ placeId, name, category }: CustomMarkerProps) {
  const IconComponent = match(category)
    .with(...Categories, (category) => MarkerIconMapping[category])
    .otherwise(() => DefaultMarker);

  return (
    <S.Wrapper key={placeId}>
      <S.Name>{name}</S.Name>
      <S.IconWrapper>
        <IconComponent width={24} />
      </S.IconWrapper>
    </S.Wrapper>
  );
}

export default CustomMarker;
