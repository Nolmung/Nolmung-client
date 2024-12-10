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
}

function CustomMarkerComponent({
  placeId,
  name,
  category,
  isActive = false,
  userCategory = null,
}: CustomMarkerComponentProps) {
  let IconComponent : SVGComponent;

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

  return (
    <S.Wrapper key={placeId}>
      <S.Name>{name}</S.Name>
      { isActive ? (
        <S.ClickIconWrapper>
          <IconComponent width={56} height={70} />
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
