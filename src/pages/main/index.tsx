import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MarkerType } from './index.type';
import { useNavigate } from 'react-router-dom';
import CustomMarker from './components/CustomMarker';
import ReactDOMServer from 'react-dom/server';
import { markerData } from '@/mocks/data/markerData';

interface LatLng {
  latitude: number;
  longitude: number;
}

function Main() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [addressY, setAddressY] = useState<number>(0);
  const [addressX, setAddressX] = useState<number>(0);

  // const [latlng, setLatLng] = useState<LatLng>({
  //   latitude: 37.49413412,
  //   longitude: 127.034306,
  // });
  // 지도 이동 시 노출된 부분만 마커를 표시하기 위함 -> map을 state로 관리
  const [newMap, setNewMap] = useState<naver.maps.Map | null>(null);

  const { naver } = window;

  let map: naver.maps.Map;
  const navigate = useNavigate();

  useEffect(() => {
    if (!mapRef.current || !naver || !addressX || !addressY) return;
    initMap();
    if (map) {
      initMarkers();
      // 지도 상태 변경 이벤트 리스너 등록
      // naver.maps.Event.addListener(map, 'idle', getTwoCoordinate);
      // ㅎget
    }
  }, [addressX, addressY]);

  /** @Todo 커스텀 훅으로 빼기!  */
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setAddressY(latitude);
          setAddressX(longitude);
        },
        (error) => {
          console.error('위치 정보를 불러올 수 없습니다:', error);
          setAddressY(37.49413412);
          setAddressX(127.034306);
        },
      );
    } else {
      setAddressY(37.49413412);
      setAddressX(127.034306);
    }
  }, []);

  const initMap = () => {
    if (!mapRef.current || !naver || !addressX || !addressY) return; // null 체크 추가 -> 약간 부가적인듯
    const center = new naver.maps.LatLng(addressY, addressX);
    const mapOptions: naver.maps.MapOptions = {
      //지도의 초기 중심 좌표
      center: center,
      zoom: 17,
      minZoom: 11,
      maxZoom: 18,
      baseTileOpacity: 0.8,
    };
    // 위 옵션을 바탕으로 지도 생성
    map = new naver.maps.Map(mapRef.current, mapOptions);
    setNewMap(map);
  };

  /** 
   * 현 지도에서 검색 버튼 클릭 함수  
   * @Todo 현 지도에서 검색 버튼 UI 구현 후 연결하기
  */
  const getTwoCoordinate = () => {
    if (newMap) {
      const bounds = newMap.getBounds();
      const center = newMap.getCenter();
      /** @Todo 지도에서 장소 조회 API 호출  */
      alert(
        `현재 좌표: [${center.x}, ${center.y}], 지도 최대 좌표: [${bounds.maxY()}, ${bounds.maxX()}]`,
      );
    }
  };

  /** 마커 클릭 함수  
   * 
  */
  const handleMarkerClick = (id: string) => {
    navigate(`/detail/${id}`);
  };

  const addMarker = (data: MarkerType) => {
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
        handleMarkerClick(data.place_id),
      );
    } catch (e) {
      console.error('Error creating marker:', e);
    }
  };

  const initMarkers = () => {
    markerData.forEach((data) => {
      addMarker(data);
    });
  };

  return (
    <Wrapper>
      <MapWrapper id="map" ref={mapRef}></MapWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgb(235, 235, 235);
  overflow: none;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 92px);
`;

export default Main;
