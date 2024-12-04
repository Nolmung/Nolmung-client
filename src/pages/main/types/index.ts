import {
  CafeMarker,
  PlaygroundMarker,
  HotelMarker,
  TravelMarker,
  MuseumMarker,
  GalleryMarker,
  FoodMarker,
  AmusementparkMarker,
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

export const MarkerIconMapping: Record<PlaceCategory, SVGComponent> = {
  RESTAURANT: FoodMarker,
  CAFE: CafeMarker,
  PLAYGROUND: PlaygroundMarker,
  PARK: AmusementparkMarker,
  ACCOMMODATION: HotelMarker,
  TRAVEL: TravelMarker,
  MUSEUM: MuseumMarker,
  GALLERY: GalleryMarker,
};
