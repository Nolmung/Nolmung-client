import { MarkerType } from '../types';
import CustomMarker from '../components/CustomMarker';
import ReactDOMServer from 'react-dom/server';
import { MarkerClickType } from '..';
import { MapPlace } from '@/service/apis/place/index.type';

/**
 * 마커 생성 함수
 * @Todo 마커 선택 이벤트 발생 시 해당 마커의 icon 변경 구현
 */

export interface CustomMarker extends naver.maps.Marker {
  data: MapPlace;
}
export const addMarker = (
  map: naver.maps.Map,
  data: MarkerType,
  handleMarkerClick: ({ e, marker }: MarkerClickType) => void,
) => {
  try {
    let newMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(data.latitude, data.longitude),
      map,
      title: data.name,
      clickable: true,
      icon: {
        content: ReactDOMServer.renderToString(
          <CustomMarker
            placeId={data.place_id}
            name={data.name}
            category={data.category}
          />,
        ),
      },
    }) as CustomMarker;

    (newMarker.data = {
      place_id: data.place_id,
      place_name: data.name,
      category: data.category,
      road_address: data.road_address,
      place_img_url: data.place_img_url,
      star_rating_avg: data.star_rating_avg,
      review_count: data.review_count,
      latitude: data.latitude,
      longitude: data.longitude,
    }),
      naver.maps.Event.addListener(newMarker, 'click', (e) => {
        if (e.domEvent) {
          e.domEvent.stopPropagation();
        }
        handleMarkerClick({ e, marker: newMarker });
      });
  } catch (e) {
    console.error('Error creating marker:', e);
  }
};

/**
 * 마커 초기화 함수
 * @Todo 마커 mock data를 서버 API로 받아오게 변경
 */
export const initMarkers = (
  map: naver.maps.Map,
  markerData: MarkerType[],
  handleMarkerClick: ({ e, marker }: MarkerClickType) => void,
) => {
  markerData.forEach((data) => {
    console.log('marker', data);
    addMarker(map, data, handleMarkerClick);
  });
};
