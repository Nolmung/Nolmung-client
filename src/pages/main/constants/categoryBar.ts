import {
  AccommodationTag,
  GalleryTag,
  CafeTag,
  BookmarksTag,
  VisitedTag,
  MuseumTag,
  ParkTag,
  PlaygroundTag,
  RestaurantTag,
  TravelTag,
} from '@/assets/images/svgs';
import { CategoryOptionType } from '../types/category';

export const CATEGORY_OPTIONS: CategoryOptionType = [
  {
    value: 'bookmarked',
    label: '찜한 장소',
    icon: BookmarksTag,
  },
  {
    value: 'visited',
    label: '방문한 장소',
    icon: VisitedTag,
  },
  {
    value: 'RESTAURANT',
    label: '식당',
    icon: RestaurantTag,
  },
  {
    value: 'CAFE',
    label: '카페',
    icon: CafeTag,
  },
  {
    value: 'PLAYGROUND',
    label: '놀이터',
    icon: PlaygroundTag,
  },
  {
    value: 'PARK',
    label: '공원',
    icon: ParkTag,
  },
  {
    value: 'TRAVEL',
    label: '여행지',
    icon: TravelTag,
  },
  {
    value: 'ACCOMMODATION',
    label: '호텔',
    icon: AccommodationTag,
  },
  {
    value: 'MUSEUM',
    label: '박물관',
    icon: MuseumTag,
  },
  {
    value: 'ARTGALLERY',
    label: '미술관',
    icon: GalleryTag,
  },
];