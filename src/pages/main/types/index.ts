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

export interface MarkerType {
  place_id: string;
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
