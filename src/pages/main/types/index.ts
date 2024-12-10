import {
  CafeMarker,
  PlaygroundMarker,
  TravelMarker,
  MuseumMarker,
  GalleryMarker,
  FoodMarker,
  AccommodationMarker,
  ParkMarker,
  RestaurantClickMarker,
  CafeClickMarker,
  PlaygroundClickMarker,
  ParkClickMarker,
  AccommodationClickMarker,
  TravelClickMarker,
  MuseumClickMarker,
  GalleryClickMarker,
} from '@/assets/images/svgs';
import { PlaceCategory, SVGComponent } from '@/common/types';
import { DogSize } from '@/service/apis/user/index.types';

/** @Todo MarkerType 과 MapPlace 타입 둘 중 하나만 사용 @ongheong */
export interface MarkerType {
  placeId: number;
  placeName: string;
  category: PlaceCategory;
  roadAddress: string;
  placeImgUrl: string;
  starRatingAvg: number;
  reviewCount: number;
  latitude: number;
  longitude: number;
  acceptSize?: DogSize;
  isBookmarked: boolean;
}

export const MarkerIconMapping: Record<
  PlaceCategory,
  { default: SVGComponent; active: SVGComponent }
> = {
  RESTAURANT: { default: FoodMarker, active: RestaurantClickMarker },
  CAFE: { default: CafeMarker, active: CafeClickMarker },
  PLAYGROUND: { default: PlaygroundMarker, active: PlaygroundClickMarker },
  PARK: { default: ParkMarker, active: ParkClickMarker },
  ACCOMMODATION: {
    default: AccommodationMarker,
    active: AccommodationClickMarker,
  },
  TRAVEL: { default: TravelMarker, active: TravelClickMarker },
  MUSEUM: { default: MuseumMarker, active: MuseumClickMarker },
  ARTGALLERY: { default: GalleryMarker, active: GalleryClickMarker },
};
