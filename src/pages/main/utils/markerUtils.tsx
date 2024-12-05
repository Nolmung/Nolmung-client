import { MarkerType } from '../types';
import ReactDOMServer from 'react-dom/server';
import { MapPlace } from '@/service/apis/place/index.type';
import { PlaceCategory } from '@/common/types';
import CustomMarkerComponent from '../components/customMarker';

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
  handleMarkerClick: (marker: CustomMarker) => void,
) => {
  try {
    let newMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(data.latitude, data.longitude),
      map,
      title: data.placeName,
      clickable: true,
      icon: {
        content: ReactDOMServer.renderToString(
          <CustomMarkerComponent
            placeId={data.placeId}
            name={data.placeName}
            category={data.category}
          />,
        ),
      },
    }) as CustomMarker;

    (newMarker.data = {
      place_id: data.placeId,
      place_name: data.placeName,
      category: data.category as PlaceCategory,
      road_address: data.roadAddress,
      place_img_url: data.placeImgUrl,
      star_rating_avg: data.starRatingAvg,
      review_count: data.reviewCount,
      latitude: data.latitude,
      longitude: data.longitude,
    }),
      naver.maps.Event.addListener(newMarker, 'click', (e) => {
        if (e.domEvent) {
          e.domEvent.stopPropagation();
        }
        handleMarkerClick(newMarker);
      });
      return newMarker;
  } catch (e) {
    console.error('Error creating marker:', e);
    return null;
  }
};

/**
 * 마커 초기화 함수
 * @Todo 마커 mock data를 서버 API로 받아오게 변경
 */
export const initMarkers = (
  map: naver.maps.Map,
  markerData: MarkerType[],
  markersRef: React.MutableRefObject<CustomMarker[]>,
  handleMarkerClick: (marker: CustomMarker) => void,
) => {
  // 기존 마커 삭제
  markersRef.current.forEach((marker) => marker.setMap(null));
  markersRef.current = [];

  // 새로운 마커 생성
  markerData.forEach((data) => {
    const newMarker = addMarker(map, data, handleMarkerClick);
    if (newMarker) {
      markersRef.current.push(newMarker);
    } else {
      console.error('Error creating marker:', data);
    }
  });
};
