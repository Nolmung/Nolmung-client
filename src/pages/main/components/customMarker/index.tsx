import S from '@/pages/main/styles/CustomMarkerComponent.styles';
import { match } from 'ts-pattern';
import { PlaceCategory, SVGComponent } from '@/common/types';
import Categories from '@/common/constants/categories';
import { MarkerIconMapping } from '../../types';
import {
  BookmarksTag,
  DefaultMarker,
  VisitedMarker,
} from '@/assets/images/svgs';

interface CustomMarkerComponentProps {
  placeId: number;
  name: string;
  category: PlaceCategory;
  isActive?: boolean;
  userCategory?: string | null;
  zoom: number;
}

function CustomMarkerComponent({
  placeId,
  name,
  category,
  isActive = false,
  userCategory = null,
  zoom,
}: CustomMarkerComponentProps) {
  let IconComponent: SVGComponent;

  if (userCategory) {
    IconComponent = match(userCategory)
      .with('bookmarked', () => BookmarksTag)
      .with('visited', () => VisitedMarker)
      .otherwise(() => DefaultMarker);
  } else {
    IconComponent = match(category)
      .with(...Categories, (category) => {
        const iconSet = MarkerIconMapping[category];
        return isActive ? iconSet.active : iconSet.default;
      })
      .otherwise(() => DefaultMarker);
  }

  let zoomSize: number;

  switch (true) {
    case zoom < 12:
      zoomSize = 30;
      break;
    case zoom >= 12 && zoom < 14:
      zoomSize = 34;
      break;
    case zoom >= 14 && zoom < 16:
      zoomSize = 38;
      break;
    default:
      zoomSize = 44;
      break;
  }

  return (
    <S.Wrapper key={placeId}>
      {zoom > 12 && <S.Name>{name}</S.Name>}
      {isActive ? (
        <S.ClickIconWrapper>
          <IconComponent width={56} height={70} />
        </S.ClickIconWrapper>
      ) : (
        <S.IconWrapper zoomSize={zoomSize}>
          <IconComponent width={100} />
        </S.IconWrapper>
      )}
    </S.Wrapper>
  );
}

export default CustomMarkerComponent;
