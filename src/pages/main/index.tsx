import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MarkerType } from './index.type';
import CustomMarker from './components/CustomMarker';
import ReactDOMServer from 'react-dom/server';
import { markerData } from '@/mocks/data/markerData';
import { LatLng } from '@/common/types';
import { DEFAULT_LATLNG } from '@/common/constants/defaultLatLng';
import { Refresh } from '@/assets/images/svgs';

function Main() {
  const { naver } = window;

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<naver.maps.Map | null>(null);
  const [mapCenter, setMapCenter] = useState<LatLng>(DEFAULT_LATLNG);
  const [isCurrentButtonActive, setIsCurrentButtonActive] =
    useState<boolean>(false);

  /**
   * 마운트 시 사용자의 현재 위치 받아옴 -> mapCenter 업데이트
   * @Todo 커스텀 훅으로 빼기!
   * */
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMapCenter({ latitude: latitude, longitude: longitude });
        },
        (error) => {
          console.error('위치 정보를 불러올 수 없습니다:', error);
        },
      );
    } else {
      console.log(
        '위치 정보 확인에 동의하지 않았습니다. 위치가 기본값으로 설정됩니다.',
      );
    }
  }, []);

  useEffect(() => {
    if (!mapContainerRef.current || !naver || !mapCenter) return;

    if (!mapRef.current) {
      const center = new naver.maps.LatLng(
        mapCenter.latitude,
        mapCenter.longitude,
      );
      const mapOptions: naver.maps.MapOptions = {
        center: center,
        zoom: 17,
        minZoom: 11,
        maxZoom: 18,
        baseTileOpacity: 0.8, // 지도 투명도 조절
      };
      mapRef.current = new naver.maps.Map(mapContainerRef.current, mapOptions);

      naver.maps.Event.addListener(mapRef.current, 'idle', () => {
        if (mapRef.current) {
          setIsCurrentButtonActive(true);
        }
      });
      initMarkers();
    } else {
      const newCenter = new naver.maps.LatLng(
        mapCenter.latitude,
        mapCenter.longitude,
      );
      mapRef.current.setCenter(newCenter); //중심 좌표 업데이트
    }
  }, [mapCenter]);

  const handleSearchCurrentButtonClick = () => {
    getTwoCoordinate();
    const newCenter = mapRef.current!.getCenter();
    setMapCenter({ latitude: newCenter.y, longitude: newCenter.x });
    setIsCurrentButtonActive(false);
  };

  /**
   * 현 지도에서 검색 버튼 클릭 함수
   * @Todo 현 지도에서 검색 버튼 UI 구현 후 연결하기
   */
  const getTwoCoordinate = () => {
    if (mapRef.current) {
      const bounds = mapRef.current.getBounds();
      const center = mapRef.current.getCenter();
      /** @Todo 지도에서 장소 조회 API 호출  */
      alert(
        `현재 좌표는 (${center.x}, ${center.y}), \n지도 최대 좌표는 (${bounds.maxY()}, ${bounds.maxX()})입니다. \n해당 좌표를 중심으로 장소를 다시 조회합니다.`,
      );
      setMapCenter({ latitude: center.x, longitude: center.y });
      initMarkers();
    }
  };

  const addMarker = (data: MarkerType) => {
    try {
      let newMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(data.latitude, data.longitude),
        map: mapRef.current!,
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
   * 마커 클릭 함수
   * @Todo 마커 클릭 시 바텀시트 호출하게 로직 변경
   */
  const handleMarkerClick = (marker: naver.maps.Marker) => {
    alert(`${marker.getTitle()}로 이동합니다.`);
    const position = marker.getPosition();
    setMapCenter({ latitude: position.y, longitude: position.x });
    mapRef.current!.setZoom(30);
  };

  /**
   * 마커 초기화 함수
   * @Todo 마커 mock data를 서버 API로 받아오게 변경
   */
  const initMarkers = () => {
    markerData.forEach((data) => {
      addMarker(data);
    });
  };

  return (
    <Wrapper>
      <MapWrapper id="map" ref={mapContainerRef}></MapWrapper>
      {isCurrentButtonActive && (
        <SearchCurrentButton onClick={handleSearchCurrentButtonClick}>
          <Refresh width={12} height={12} />
          <SearchCurrentButtonText>현 지도에서 검색</SearchCurrentButtonText>
        </SearchCurrentButton>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 92px);
`;

const SearchCurrentButton = styled.button`
  display: flex;
  height: 36px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 50px;
  border: 1px solid #080808;
  background: rgba(8, 8, 8, 0.65);
  z-index: 100;

  position: sticky;
  bottom: calc(12px + 92px);
  margin: 0 auto;
`;

const SearchCurrentButtonText = styled.span`
  line-height: 10px;
  letter-spacing: -0.12px;
  color: #fff;
  text-align: center;
  font-weight: 500;
`;

export default Main;
