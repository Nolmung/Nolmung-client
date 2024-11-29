import {
  FoodMarker,
  CafeMarker,
  PlaygroundMarker,
  AmusementparkMarker,
  HotelMarker,
  TravelMarker,
  MuseumMarker,
  GalleryMarker,
} from '@/assets/images/svgs';
import { Category, SVGComponent } from '@/common/types';

export interface MarkerType {
  place_id: string;
  name: string;
  category: Category;
  road_address: string;
  place_img_url: string;
  star_rating_avg: number;
  review_count: number;
  latitude: number;
  longitude: number;
}

export const MarkerIconMapping: Record<Category, SVGComponent> = {
  FOOD: FoodMarker,
  CAFE: CafeMarker,
  PLAYGROUND: PlaygroundMarker,
  AMUSEMENTPARK: AmusementparkMarker,
  HOTEL: HotelMarker,
  TRAVEL: TravelMarker,
  MUSEUM: MuseumMarker,
  GALLERY: GalleryMarker,
};
