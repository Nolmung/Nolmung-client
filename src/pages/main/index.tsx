import { useEffect, useRef, useState } from 'react';
import { markerData } from '@/mocks/data/markerData';
import { Refresh } from '@/assets/images/svgs';
import S from './styles/index.style';
import { useMapCenter } from './hooks/useMapCenter';
import { CustomMarker, initMarkers } from './utils/markerUtils';
import { getCurrentAndMaxCoordinate } from './utils/coordinateUtils';
import BottomSheet from './components/bottomSheet';
import CategoryBar from './components/categoryBar';
import {
  BOTTOM_CARD_HEIGHT,
  BOTTOM_HEIGHT,
  BOTTOM_NAV_HEIGHT,
  CURRENT_BUTTON_HEIGHT,
  DEFAULT_BOTTOM_HEIGHT,
} from '@/common/constants/ui';
import Content from './components/bottomSheet/Content';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import CustomMarkerComponent from './components/CustomMarkerComponent';

function Main() {
  const { naver } = window;

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<naver.maps.Map | null>(null);
  const [mapCenter, setMapCenter] = useMapCenter();
  const [isCurrentButtonActive, setIsCurrentButtonActive] =
    useState<boolean>(false);

  const [bottomCardVisible, setBottomCardVisible] = useState<boolean>(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false);
  const selectedMarkerRef = useRef<CustomMarker | null>(null);

  const [bottomHeight, setBottomHeight] = useState<number>(
    DEFAULT_BOTTOM_HEIGHT,
  );
  const [currentButtonHeight, setCurrentButtonHeight] = useState<number>(
    CURRENT_BUTTON_HEIGHT,
  );
  const [category, setCategory] = useState<string | null>(null);
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (category || query.get('category')) {
      setBottomHeight(BOTTOM_HEIGHT);
    }
  }, [category]);

  useEffect(() => {
    if (bottomSheetVisible && !bottomCardVisible) {
      setBottomHeight(BOTTOM_HEIGHT);
      setCurrentButtonHeight(BOTTOM_HEIGHT + CURRENT_BUTTON_HEIGHT);
    } else if (bottomCardVisible && !bottomSheetVisible) {
      setBottomHeight(0);
      setCurrentButtonHeight(BOTTOM_CARD_HEIGHT + CURRENT_BUTTON_HEIGHT);
    } else if (!bottomCardVisible && !bottomSheetVisible) {
      // 바텀시트, 바텀카드 둘 다 안보이면 기본 높이로 설정
      setBottomHeight(DEFAULT_BOTTOM_HEIGHT);
    }
  }, [bottomSheetVisible, bottomCardVisible]);

  useEffect(() => {
    if (location.pathname === '/' && !location.search) {
      setIsSearched(true);
      setCurrentButtonHeight(CURRENT_BUTTON_HEIGHT + BOTTOM_NAV_HEIGHT);
      if (selectedMarkerRef.current) {
        selectedMarkerRef.current.setIcon({
          content: ReactDOMServer.renderToString(
            <CustomMarkerComponent
              placeId={selectedMarkerRef.current.data.place_id}
              name={selectedMarkerRef.current.data.place_name}
              category={selectedMarkerRef.current.data.category}
              isActive={false}
            />,
          ),
        });
      }
      selectedMarkerRef.current = null;
    } else {
      setIsSearched(false);
    }
  }, [location.pathname, location.search]);

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
  const handleMarkerClick = (marker: CustomMarker) => {
    setBottomSheetVisible(false);

    if (selectedMarkerRef.current) {
      selectedMarkerRef.current.setIcon({
        content: ReactDOMServer.renderToString(
          <CustomMarkerComponent
            placeId={selectedMarkerRef.current.data.place_id}
            name={selectedMarkerRef.current.data.place_name}
            category={selectedMarkerRef.current.data.category}
            isActive={false}
          />,
        ),
      });
    }

    selectedMarkerRef.current = marker;
    const position = marker.getPosition();

    setMapCenter({ latitude: position.y - 0.0005, longitude: position.x });
    marker.setIcon({
      content: ReactDOMServer.renderToString(
        <CustomMarkerComponent
          placeId={marker.data.place_id}
          name={marker.data.place_name}
          category={marker.data.category}
          isActive={true}
        />,
      ),
    });
    navigate(`/?search=${marker.data.place_name}`);

    setBottomCardVisible(true);

    mapRef.current!.setZoom(30);
  };

  const handleMapClick = () => {
    naver.maps.Event.addListener(mapRef.current, 'click', () => {
      setBottomSheetVisible(false);
      setBottomCardVisible(false);
      setCategory(null);
      navigate('/');
    });
  };

  return (
    <S.Wrapper>
      <S.MapWrapper id="map" ref={mapContainerRef} onClick={handleMapClick}>
        {isSearched && (
          <CategoryBar
            category={category}
            setCategory={setCategory}
            setBottomSheetVisible={setBottomSheetVisible}
            setBottomCardVisible={setBottomCardVisible}
          />
        )}
        <S.Wrapper onClick={(e) => e.stopPropagation()}>
          <S.BottomSheetWrapper onClick={(e) => e.stopPropagation()}>
            {isCurrentButtonActive && (
              <S.SearchCurrentButton
                bottomHeight={currentButtonHeight}
                onClick={handleSearchCurrentButtonClick}
              >
                <Refresh width={12} height={12} />
                <S.SearchCurrentButtonText>
                  현 지도에서 검색
                </S.SearchCurrentButtonText>
              </S.SearchCurrentButton>
            )}
            <S.BottomCardWrapper>
              {bottomCardVisible && selectedMarkerRef.current && (
                <S.Bottom
                  bottomVisible={bottomCardVisible}
                  bottomHeight={bottomHeight}
                >
                  <Content place={selectedMarkerRef.current.data} />
                </S.Bottom>
              )}
            </S.BottomCardWrapper>
            {bottomSheetVisible && (
              <S.Bottom
                bottomVisible={bottomSheetVisible}
                bottomHeight={bottomHeight}
              >
                <BottomSheet />
              </S.Bottom>
            )}
          </S.BottomSheetWrapper>
        </S.Wrapper>
      </S.MapWrapper>
    </S.Wrapper>
  );
}

export default Main;
