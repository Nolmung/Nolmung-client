import { useEffect, useRef, useState } from 'react';
import { LocationButtonIcon, Refresh } from '@/assets/images/svgs';
import { useMapCenter } from './hooks/useMapCenter';
import { getCurrentAndMaxCoordinate } from './utils/coordinateUtils';
import { CustomMarker, initMarkers } from './utils/markerUtils';
import BottomSheet from './components/bottomSheet';
import S from './styles/index.style';
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
import { getUserLocation } from './utils/userLocationUtils';
import CustomMarkerComponent from './components/customMarker';
import { getPlacesFilter, getPlacesMap } from '@/service/apis/place';
import { PlaceCategory } from '@/common/types';
import { MarkerType } from './types';
import useSetDocumentTitle from '@/common/hooks/useSetDocumentTitle';

function Main() {
  useSetDocumentTitle('놀멍');
  const { naver } = window;

  const location = useLocation();
  const navigate = useNavigate();

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<naver.maps.Map | null>(null);
  const selectedMarkerRef = useRef<CustomMarker | null>(null);
  const markersRef = useRef<CustomMarker[]>([]);

  const [isCurrentButtonActive, setIsCurrentButtonActive] =
    useState<boolean>(false);

  const [bottomCardVisible, setBottomCardVisible] = useState<boolean>(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState<boolean>(
    location.search ? true : false,
  );
  const [bottomHeight, setBottomHeight] = useState<number>(
    DEFAULT_BOTTOM_HEIGHT,
  );
  const [currentButtonHeight, setCurrentButtonHeight] = useState<number>(
    CURRENT_BUTTON_HEIGHT,
  );
  const [category, setCategory] = useState<string | null>(null);

  const [mapCenter, setMapCenter] = useMapCenter();

  const [markerData, setMarkerData] = useState<MarkerType[]>([]);

  useEffect(() => {
    const initializeMap = async () => {
      if (!mapContainerRef.current || !naver || !mapCenter) return;

      if (!mapRef.current) {
        const center = new naver.maps.LatLng(
          mapCenter.latitude,
          mapCenter.longitude,
        );
        const mapOptions: naver.maps.MapOptions = {
          center: center,
          zoom: 14,
          minZoom: 10,
          maxZoom: 18,
          baseTileOpacity: 0.8, //지도 투명도 조절
        };
        mapRef.current = new naver.maps.Map(
          mapContainerRef.current,
          mapOptions,
        );

        naver.maps.Event.addListener(mapRef.current, 'idle', () => {
          if (mapRef.current) {
            setIsCurrentButtonActive(true);
          }
        });
        console.log('지도 초기화 완료');

        const query = new URLSearchParams(window.location.search);
        const categoryFromUrl = query.get('category');
        const searchFromUrl = query.get('search');

        try {
          if (categoryFromUrl) {
            console.log(`카테고리 필터링 API 호출: ${categoryFromUrl}`);
            await getCategoryMarkers(categoryFromUrl);
          } else if (searchFromUrl) {
            console.log(`검색어로 장소 검색 API 호출: ${searchFromUrl}`);
            /** @Todo search api 호출 함수 넣기 */
          } else {
            console.log('지도에서 장소 검색 API 호출');
            await getAndInitMarkers();
          }
        } catch (error) {
          console.error('Error during API call:', error);
        }
      } else {
        const newCenter = new naver.maps.LatLng(
          mapCenter.latitude,
          mapCenter.longitude,
        );
        mapRef.current.setCenter(newCenter); //중심 좌표 업데이트
        console.log('지도 중심 좌표 업데이트');
      }
    };
    // 지도 초기화 함수 호출
    initializeMap();
  }, [mapCenter]);

  /** 지도 초기화 이후 카테고리 필터링 또는 검색어로 장소 검색 */ 
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const categoryFromUrl = query.get('category');
    const searchFromUrl = query.get('search');
    if (categoryFromUrl) {
      getCategoryMarkers(categoryFromUrl);
    } else if (searchFromUrl) {
      console.log(`검색어로 장소 검색 API 호출: ${searchFromUrl}`);
      /** @Todo search api 호출 함수 넣기 */
    }
  }, [location.search]);

  /** 바텀시트, 바텀카드 높이 조절 */
  useEffect(() => {
    if (bottomSheetVisible && !bottomCardVisible) {
      setBottomHeight(BOTTOM_HEIGHT);
      setCurrentButtonHeight(BOTTOM_HEIGHT + CURRENT_BUTTON_HEIGHT);
    } else if (bottomCardVisible && !bottomSheetVisible) {
      setCurrentButtonHeight(BOTTOM_CARD_HEIGHT + CURRENT_BUTTON_HEIGHT + 100);
      setBottomHeight(70);
    } else if (!bottomCardVisible && !bottomSheetVisible) {
      // 바텀시트, 바텀카드 둘 다 안보이면 기본 높이로 설정
      setBottomHeight(DEFAULT_BOTTOM_HEIGHT);
    }
  }, [bottomSheetVisible, bottomCardVisible]);

  /** 지도로 돌아올 경우 기존에 활성화된 카테고리, 바텀시트, 바텀카드, 마커 비활성화 */
  useEffect(() => {
    if (location.pathname === '/' && !location.search) {
      setCategory(null);
      setBottomSheetVisible(false);
      setBottomCardVisible(false);
      setCurrentButtonHeight(CURRENT_BUTTON_HEIGHT + BOTTOM_NAV_HEIGHT);
      if (selectedMarkerRef.current) {
        selectedMarkerRef.current.setIcon({
          content: ReactDOMServer.renderToString(
            <CustomMarkerComponent
              placeId={selectedMarkerRef.current.data.placeId}
              name={selectedMarkerRef.current.data.placeName}
              category={selectedMarkerRef.current.data.category}
              isActive={false}
            />,
          ),
        });
      }
      selectedMarkerRef.current = null;
    }
  }, [location, location.pathname, location.search]);

  /** 지도에서 장소 검색 get 함수 */
  const getAndInitMarkers = async () => {
    if (!mapRef.current) return;
    const requestBody = getCurrentAndMaxCoordinate(mapRef.current);
    const markerData = await getPlacesMap(requestBody);
    setMarkerData(markerData);
    initMarkers(mapRef.current, markerData, markersRef, handleMarkerClick);
  };

  /** 카테고리 필터링 get 함수 */
  const getCategoryMarkers = async (categoryFromUrl: string) => {
    if (!mapRef.current) return;

    setCategory(categoryFromUrl);
    setBottomHeight(BOTTOM_HEIGHT);

    try {
      const coordinate = getCurrentAndMaxCoordinate(mapRef.current);
      const requestBody = {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        maxLatitude: coordinate.maxLatitude,
        maxLongitude: coordinate.maxLongitude,
        ...(categoryFromUrl === 'bookmarks' && { isBookmarked: true }),
        ...(categoryFromUrl === 'visited' && { isVisited: true }),
        ...(categoryFromUrl !== 'bookmarks' &&
          categoryFromUrl !== 'visited' && {
            category: categoryFromUrl as PlaceCategory,
          }),
      };
      const markerData = await getPlacesFilter(requestBody);
      setMarkerData(markerData);
      initMarkers(mapRef.current, markerData, markersRef, handleMarkerClick);
    } catch (error) {
      console.error('Error Get Filtering Data:', error);
    }
  };

  /** 현 지도에서 검색 버튼 클릭 이벤트 함수 */
  const handleSearchCurrentButtonClick = async () => {
    const requestBody = getCurrentAndMaxCoordinate(mapRef.current!);

    alert(
      `현재 좌표는 (${requestBody.latitude}, ${requestBody.longitude}), \n지도 최대 좌표는 (${requestBody.latitude}, ${requestBody.longitude})입니다. \n해당 좌표를 중심으로 장소를 다시 조회합니다.`,
    );

    const newCenter = mapRef.current!.getCenter();
    setMapCenter({ latitude: newCenter.y, longitude: newCenter.x });
    const query = new URLSearchParams(window.location.search);
    const categoryFromUrl = query.get('category');

    try {
      if (categoryFromUrl) {
        console.log(`카테고리 필터링 API 호출: ${categoryFromUrl}`);
        await getCategoryMarkers(categoryFromUrl);
      } else {
        console.log('지도에서 장소 검색 API 호출');
        await getAndInitMarkers();
      }
    } catch (error) {
      console.error('Error during get and init markers', error);
    }
    setIsCurrentButtonActive(false);
  };

  /** 마커 클릭 이벤트 함수 */
  const handleMarkerClick = (marker: CustomMarker) => {
    setBottomSheetVisible(false);

    if (selectedMarkerRef.current) {
      selectedMarkerRef.current.setIcon({
        content: ReactDOMServer.renderToString(
          <CustomMarkerComponent
            placeId={selectedMarkerRef.current.data.placeId}
            name={selectedMarkerRef.current.data.placeName}
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
          placeId={marker.data.placeId}
          name={marker.data.placeName}
          category={marker.data.category}
          isActive={true}
        />,
      ),
    });

    navigate(`/?search=${marker.data.placeName}`);
    setBottomCardVisible(true);
    mapRef.current!.setZoom(30);
  };

  /** 지도 클릭 시, 기존에 활성화된 컴포넌트들을 비활성화 하도록 변경하는 이벤트 함수 */
  const handleMapClick = () => {
    naver.maps.Event.addListener(mapRef.current, 'click', () => {
      setBottomSheetVisible(false);
      setBottomCardVisible(false);
      setCategory(null);
      navigate('/');
    });
  };

  /** 사용자 위치로 지도 이동하기 버튼 이벤트 함수 */
  const handleLocationButtonClick = () => {
    getUserLocation((coords) => {
      setMapCenter(coords);
      mapRef.current!.setZoom(17);
    });
    navigate('/');
  };

  return (
    <S.Wrapper>
      <S.MapWrapper id="map" ref={mapContainerRef} onClick={handleMapClick}>
        {!(category || location.search) && (
          <CategoryBar
            category={category}
            setCategory={setCategory}
            setBottomSheetVisible={setBottomSheetVisible}
            setBottomCardVisible={setBottomCardVisible}
          />
        )}
        <S.Wrapper onClick={(e) => e.stopPropagation()}>
          <S.BottomSheetWrapper onClick={(e) => e.stopPropagation()}>
            <S.LocationButtonWrapper
              bottomHeight={currentButtonHeight}
              onClick={handleLocationButtonClick}
            >
              <LocationButtonIcon width={38} height={38} />
            </S.LocationButtonWrapper>
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
                  <Content
                    isCard={true}
                    place={selectedMarkerRef.current.data}
                  />
                </S.Bottom>
              )}
            </S.BottomCardWrapper>
            <S.Bottom
              bottomVisible={bottomSheetVisible}
              bottomHeight={bottomHeight}
            >
              <BottomSheet placeMap={markerData} />
            </S.Bottom>
          </S.BottomSheetWrapper>
        </S.Wrapper>
      </S.MapWrapper>
    </S.Wrapper>
  );
}

export default Main;
