import { useEffect, useRef, useState } from 'react';
import { markerData } from '@/mocks/data/markerData';
import { Refresh } from '@/assets/images/svgs';
import S from './styles/index.style';
import { useMapCenter } from './hooks/useMapCenter';
import { initMarkers } from './utils/markerUtils';
import { getCurrentAndMaxCoordinate } from './utils/coordinateUtils';
// import BottomSheet from './components/bottomSheet';

function Main() {
  const { naver } = window;

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<naver.maps.Map | null>(null);
  const [mapCenter, setMapCenter] = useMapCenter();
  const [isCurrentButtonActive, setIsCurrentButtonActive] =
    useState<boolean>(false);

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
        baseTileOpacity: 0.8, //지도 투명도 조절
      };
      mapRef.current = new naver.maps.Map(mapContainerRef.current, mapOptions);

      naver.maps.Event.addListener(mapRef.current, 'idle', () => {
        if (mapRef.current) {
          setIsCurrentButtonActive(true);
        }
      });
      initMarkers(mapRef.current, markerData, handleMarkerClick);
    } else {
      const newCenter = new naver.maps.LatLng(
        mapCenter.latitude,
        mapCenter.longitude,
      );
      mapRef.current.setCenter(newCenter); //중심 좌표 업데이트
    }
  }, [mapCenter]);

  /**
   * 현 지도에서 검색 버튼 클릭 이벤트 함수
   * @Todo alert -> 지도에서 장소 조회 API 호출 로직으로 변경
   */
  const handleSearchCurrentButtonClick = () => {
    const { currentCenter, maxBounds } = getCurrentAndMaxCoordinate(
      mapRef.current!,
    );

    alert(
      `현재 좌표는 (${currentCenter.latitude}, ${currentCenter.longitude}), \n지도 최대 좌표는 (${maxBounds.latitude}, ${maxBounds.longitude})입니다. \n해당 좌표를 중심으로 장소를 다시 조회합니다.`,
    );

    const newCenter = mapRef.current!.getCenter();
    setMapCenter({ latitude: newCenter.y, longitude: newCenter.x });
    initMarkers(mapRef.current!, markerData, handleMarkerClick);
    setIsCurrentButtonActive(false);
  };

  /**
   * 마커 클릭 이벤트 함수
   * @Todo 마커 클릭 시 바텀시트 호출하게 로직 변경
   */
  const handleMarkerClick = (marker: naver.maps.Marker) => {
    alert(`${marker.getTitle()}로 이동합니다.`);
    const position = marker.getPosition();
    setMapCenter({ latitude: position.y, longitude: position.x });
    mapRef.current!.setZoom(30);
  };

  return (
    <S.Wrapper>
      <S.MapWrapper id="map" ref={mapContainerRef}></S.MapWrapper>
      {isCurrentButtonActive && (
        <S.SearchCurrentButton onClick={handleSearchCurrentButtonClick}>
          <Refresh width={12} height={12} />
          <S.SearchCurrentButtonText>
            현 지도에서 검색
          </S.SearchCurrentButtonText>
        </S.SearchCurrentButton>
      )}
      {/* <div style={{ height: '100dvh', width: '100%', backgroundColor: 'pink'}}>
        <S.Bottom>
          <BottomSheet />
        </S.Bottom>
      </div> */}
    </S.Wrapper>
  );
}

export default Main;
