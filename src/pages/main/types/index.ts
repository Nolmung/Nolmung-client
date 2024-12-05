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

/** @Todo MarkerType 과 MapPlace 타입 둘 중 하나만 사용 @ongheong */
export interface MarkerType {
  place_id: number;
  name: string;
  category: PlaceCategory;
  road_address: string;
  place_img_url: string;
  star_rating_avg: number;
  review_count: number;
  latitude: number;
  longitude: number;
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
  GALLERY: { default: GalleryMarker, active: GalleryClickMarker },
};
