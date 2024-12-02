import S from '@/pages/main/styles/CustomMarkerComponent.styles';
import { match } from 'ts-pattern';
import { PlaceCategory } from '@/common/types';
import Categories from '@/common/constants/categories';
import { MarkerIconMapping } from '../types';
import { ClickMarker, DefaultMarker } from '@/assets/images/svgs';

interface CustomMarkerComponentProps {
  placeId: number;
  name: string;
  category: PlaceCategory;
  isActive?: boolean;
}

function CustomMarkerComponent({
  placeId,
  name,
  category,
  isActive = false,
}: CustomMarkerComponentProps) {
  const IconComponent = match(category)
    .with(...Categories, (category) => MarkerIconMapping[category])
    .otherwise(() => DefaultMarker);

  return (
    <S.Wrapper key={placeId}>
      <S.Name>{name}</S.Name>
      {isActive ? (
        <S.ClickIconWrapper>
          <ClickMarker width={56} height={70}/>
        </S.ClickIconWrapper>
      ) : (
        <S.IconWrapper>
          <IconComponent width={100} />
        </S.IconWrapper>
      )}
    </S.Wrapper>
  );
}

export default CustomMarkerComponent;
