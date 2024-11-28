import { MarkerType } from '../index.type';
import CustomMarker from '../components/CustomMarker';
import ReactDOMServer from 'react-dom/server';

/**
 * 마커 생성 함수
 * @Todo 마커 선택 이벤트 발생 시 해당 마커의 icon 변경 구현
 */
export const addMarker = (
  map: naver.maps.Map,
  data: MarkerType,
  handleMarkerClick: (marker: naver.maps.Marker) => void,
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
    });
    naver.maps.Event.addListener(newMarker, 'click', () =>
      handleMarkerClick(newMarker),
    );
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
  handleMarkerClick: (marker: naver.maps.Marker) => void,
) => {
  markerData.forEach((data) => {
    addMarker(map, data, handleMarkerClick);
  });
};
