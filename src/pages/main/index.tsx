import { useEffect, useRef, useState } from 'react';
import {
  CurrentLocationMarker,
  LocationButtonIcon,
  Refresh,
} from '@/assets/images/svgs';
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
import { useGetPlaceSearch } from '../todaymungPlaceRegist/queries';
import { useLoginPromptModalStore } from '@/stores/useLoginPromptModalStore';
import LoginPromptModal from '@/common/components/loginPromptModal';
import getIsLogin from '@/common/utils/getIsLogin';
import { FilterState } from './types/filter';
import { withEvent } from '@/service/googleAnalytics/analytics';
import { EVENTS } from '@/service/googleAnalytics/events';
import ReactGA from 'react-ga4';
// import { LoadingNolmungLottie } from '@/common/components/lottie';

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

  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const { data: searchResponseData, isLoading } = useGetPlaceSearch(
    searchKeyword || '',
  );

  const moveLatLng = { lat: -0.0007, lng: 0.0002 };

  const currentLocationMarker = useRef<naver.maps.Marker | null>(null);

  const { isOpen, open, close } = useLoginPromptModalStore();

  const isLoggedIn = getIsLogin();

  const isInitialMountRef = useRef(true); // 첫 마운트인지 확인

  // const [isMapLoading, setIsMapLoading] = useState(true);

  /** 마운트 될 때 3초간 실행 -> @Todo 로딩 로직 생각하여 적용하기 */
  // useEffect(() => {
  //   const isFirstLoad = sessionStorage.getItem('isFirstLoad');
  //   if (!isFirstLoad) {
  //     sessionStorage.setItem('isFirstLoad', 'true');
  //     const timer = setTimeout(() => {
  //       setIsMapLoading(false);
  //     }, 2500);

  //     return () => clearTimeout(timer);
  //   } else {
  //     setIsMapLoading(false);
  //   }
  // }, []);

  const query = new URLSearchParams(window.location.search);
  const categoryFromUrl = query.get('category');
  const searchFromUrl = query.get('search');

  /**사용자가 지도를 얼마나 확대하거나 축소하는지 파악 */
  useEffect(() => {
    if (!mapRef.current) return;

    naver.maps.Event.addListener(mapRef.current, 'zoom_changed', () => {
      const zoomLevel = mapRef.current?.getZoom();
      ReactGA.event({
        category: EVENTS.MAIN.MAP_ZOOM.category,
        action: 'zoom_changed',
        label: `Zoom Level ${zoomLevel}`,
        value: zoomLevel,
      });
    });
  }, []);

  useEffect(() => {
    if (!searchFromUrl) {
      setBottomCardVisible(false);
      setBottomSheetVisible(true);
      getCategoryMarkers(categoryFromUrl as string);
    }
  }, [categoryFromUrl, searchFromUrl]);

  useEffect(() => {
    const initializeMap = withEvent(async () => {
      if (!mapContainerRef.current || !naver || !mapCenter) return;

      if (!mapRef.current) {
        const center = new naver.maps.LatLng(
          mapCenter.latitude,
          mapCenter.longitude,
        );

        const mapOptions: naver.maps.MapOptions = {
          center: center,
          zoom: 14,
          minZoom: 8,
          maxZoom: 18,
          baseTileOpacity: 0.8, //지도 투명도 조절
        };

        mapRef.current = new naver.maps.Map(
          mapContainerRef.current,
          mapOptions,
        );

        naver.maps.Event.addListener(mapRef.current, 'idle', () => {
          setIsCurrentButtonActive(true);
        });

        try {
          if (categoryFromUrl) {
            await getCategoryMarkers(categoryFromUrl);
          } else if (searchFromUrl) {
            setSearchKeyword(searchFromUrl);
            if (isLoading) return;
            if (searchResponseData?.length == 1) {
              setBottomCardVisible(true);
              setBottomSheetVisible(false);

              setMapCenter({
                latitude: searchResponseData[0].latitude + moveLatLng.lat,
                longitude: searchResponseData[0].longitude + moveLatLng.lng,
              });
            }

            setMarkerData(searchResponseData as MarkerType[]);
            initMarkers(
              mapRef.current as naver.maps.Map,
              searchResponseData as MarkerType[],
              markersRef,
              handleMarkerClick,
            );
          } else {
            await getAndInitMarkers();
          }

          // 사용자 현재 위치 마커 생성 및 초기화
          const currentPosition = new naver.maps.LatLng(
            mapCenter.latitude,
            mapCenter.longitude,
          );

          if (!currentLocationMarker.current) {
            // 마커가 없으면 새로 생성
            currentLocationMarker.current = new naver.maps.Marker({
              position: currentPosition,
              map: mapRef.current,
              icon: {
                content: ReactDOMServer.renderToString(
                  <CurrentLocationMarker width={30} height={30} />,
                ),
              },
            });
          }

        } catch (error) {
          // setIsMapLoading(false);
          console.error('Error during API call:', error);
        }
      } else {
        const newCenter = new naver.maps.LatLng(
          mapCenter.latitude,
          mapCenter.longitude,
        );
        mapRef.current.setCenter(newCenter); //중심 좌표 업데이트
      }
    }, EVENTS.MAIN.MAP_MOVE);
    // 지도 초기화 함수 호출
    initializeMap();
  }, [mapCenter]);

  /** 센터 이동 필요시 */
  useEffect(() => {
    const lat = new URLSearchParams(location.search).get('lat');
    const lng = new URLSearchParams(location.search).get('lng');
    if (mapCenter) {
      const newCenter = new naver.maps.LatLng(
        (mapCenter.latitude = lat
          ? parseFloat(lat) + moveLatLng.lat
          : mapCenter.latitude),
        (mapCenter.longitude = lng
          ? parseFloat(lng) + moveLatLng.lng
          : mapCenter.longitude),
      );
      mapRef.current?.setCenter(newCenter);
    }
  }, [location.search, mapCenter]);

  const [selectedFilter, setSelectedFilter] = useState<FilterState>({
    weight: null,
    rating: null,
  });

  /** 지도 초기화 이후 카테고리 필터링 또는 검색어로 장소 검색 */
  useEffect(() => {
    setSelectedFilter({ weight: null, rating: null });
    const query = new URLSearchParams(window.location.search);
    const categoryFromUrl = query.get('category');
    const searchFromUrl = query.get('search');
    if (categoryFromUrl) {
      getCategoryMarkers(categoryFromUrl);
    } else if (searchFromUrl) {
      setSearchKeyword(searchFromUrl);
      if (searchResponseData) setMarkerData(searchResponseData);
      if (searchResponseData) {
        initMarkers(
          mapRef?.current as naver.maps.Map,
          searchResponseData,
          markersRef,
          handleMarkerClick,
        );
        if (searchResponseData.length === 1 && markersRef?.current?.[0]) {
          // markersRef.current = searchResponseData[0];
          setMarkerData(searchResponseData);
          initMarkerActive(markersRef.current[0]);
        } else {
          mapRef.current?.setZoom(10);
        }
      }
    }
  }, [location.search, searchResponseData]);

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

    /** 첫 마운트일 경우 바텀시트 오픈 */
    if (isInitialMountRef.current) {
      setBottomSheetVisible(true);
      isInitialMountRef.current = false;
      return;
    } 

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
              zoom={mapRef.current!.getZoom()}
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

    let userCategory = null;

    if (categoryFromUrl === 'bookmarked' || categoryFromUrl === 'visited') {
      if (!isLoggedIn) {
        open();
        return;
      }
      userCategory = categoryFromUrl;
    }

    setCategory(categoryFromUrl);

    try {
      const coordinate = getCurrentAndMaxCoordinate(mapRef.current);
      const requestBody = {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        maxLatitude: coordinate.maxLatitude,
        maxLongitude: coordinate.maxLongitude,
        ...(categoryFromUrl === 'bookmarked' && { isBookmarked: true }),
        ...(categoryFromUrl === 'visited' && { isVisited: true }),
        ...(categoryFromUrl !== 'bookmarked' &&
          categoryFromUrl !== 'visited' && {
            category: categoryFromUrl as PlaceCategory,
          }),
      };
      const markerData = await getPlacesFilter(requestBody);
      setMarkerData(markerData);
      if (userCategory) {
        initMarkers(
          mapRef.current,
          markerData,
          markersRef,
          handleMarkerClick,
          userCategory,
        );
      } else {
        initMarkers(mapRef.current, markerData, markersRef, handleMarkerClick);
      }
    } catch (error) {
      console.error('Error Get Filtering Data:', error);
    }
    setBottomHeight(BOTTOM_HEIGHT);
  };

  /** 현 지도에서 검색 버튼 클릭 이벤트 함수 */
  const handleSearchCurrentButtonClick = withEvent(async () => {
    getCurrentAndMaxCoordinate(mapRef.current!);
    const newCenter = mapRef.current!.getCenter();
    setMapCenter({ latitude: newCenter.y, longitude: newCenter.x });
    const query = new URLSearchParams(window.location.search);
    const categoryFromUrl = query.get('category');

    try {
      if (categoryFromUrl) {
        await getCategoryMarkers(categoryFromUrl);
      } else {
        await getAndInitMarkers();
      }
    } catch (error) {
      console.error('Error during get and init markers', error);
    }
    setIsCurrentButtonActive(false);

    ReactGA.event({
      category: EVENTS.MAIN.USER_LOCATION_BUTTON_CLICK.category,
      action: 'click',
      label: categoryFromUrl || 'no_category',
      value: newCenter ? Math.floor(newCenter.y) : undefined,
    });
  }, EVENTS.MAIN.USER_LOCATION_BUTTON_CLICK);

  /** 기존 활성화된 마커 초기화 후 새 마커를 활성화 하는 함수 */
  const initMarkerActive = (marker: CustomMarker) => {
    setBottomSheetVisible(false);

    if (selectedMarkerRef.current) {
      selectedMarkerRef.current.setIcon({
        content: ReactDOMServer.renderToString(
          <CustomMarkerComponent
            placeId={selectedMarkerRef.current.data.placeId}
            name={selectedMarkerRef.current.data.placeName}
            category={selectedMarkerRef.current.data.category}
            isActive={false}
            zoom={mapRef.current!.getZoom()}
          />,
        ),
      });
    }

    selectedMarkerRef.current = marker;

    marker.setIcon({
      content: ReactDOMServer.renderToString(
        <CustomMarkerComponent
          placeId={marker.data.placeId}
          name={marker.data.placeName}
          category={marker.data.category}
          isActive={true}
          zoom={mapRef.current!.getZoom()}
        />,
      ),
    });

    setBottomCardVisible(true);
    if (mapRef.current) {
      mapRef.current!.setZoom(30);
    }
  };

  /** 마커 클릭 이벤트 함수 */
  const handleMarkerClick = (marker: CustomMarker) => {
    window.history.pushState(null, '', '/');
    navigate(
      `/?search=${marker.data.placeName}&lat=${marker.data.latitude}&lng=${marker.data.longitude}`,
    );
    const position = marker.getPosition();
    setMapCenter({ latitude: position.y - 0.0005, longitude: position.x });
    initMarkerActive(marker);
    ReactGA.event({
      category: EVENTS.MAIN.MARKER_CLICK.category,
      action: 'marker_clicked',
      label: marker.data.placeName,
      value: marker.data.placeId,
    });
  };

  /** 지도 클릭 시, 기존에 활성화된 컴포넌트들을 비활성화 하도록 변경하는 이벤트 함수 */
  const handleMapClick = () => {
    naver.maps.Event.addListener(mapRef.current, 'click', () => {
      setBottomSheetVisible(false);
      setBottomCardVisible(false);
      setCategory(null);
      navigate('/');
    });
    ReactGA.event({
      category: EVENTS.MAIN.MAP_CLICK.category,
      action: 'map_click',
      label: 'unselect_markers',
    });
  };

  /** 사용자 위치로 지도 이동하기 버튼 이벤트 함수 */
  const handleLocationButtonClick = () => {
    getUserLocation((coords) => {
      setMapCenter(coords);
      mapRef.current!.setZoom(17);
      const currentPosition = new naver.maps.LatLng(
        mapCenter.latitude,
        mapCenter.longitude,
      );
      currentLocationMarker.current?.setPosition(currentPosition);
    });
    ReactGA.event({
      category: EVENTS.MAIN.USER_LOCATION_BUTTON_CLICK.category,
      action: 'move_to_user_location',
      label: 'User Current Location',
    });
    navigate('/');
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      ReactGA.event({
        category: EVENTS.MAIN.PAGE_EXIT.category,
        action: 'page_unload',
        label: 'Main Page Exit',
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      ReactGA.event({
        category: 'Engagement',
        action: 'User has been on the page for 5 minutes',
      });
    }, 300000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Wrapper>
      {/* {isMapLoading && <LoadingNolmungLottie />} */}
      {isOpen && <LoginPromptModal closeModal={close} />}
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
              $bottomHeight={currentButtonHeight}
              onClick={handleLocationButtonClick}
            >
              <LocationButtonIcon width={38} height={38} />
            </S.LocationButtonWrapper>
            {isCurrentButtonActive && (
              <S.SearchCurrentButton
                $bottomHeight={currentButtonHeight}
                onClick={handleSearchCurrentButtonClick}
              >
                <Refresh width={12} height={12} />
                <S.SearchCurrentButtonText>
                  현 지도에서 검색
                </S.SearchCurrentButtonText>
              </S.SearchCurrentButton>
            )}
            <S.BottomCardWrapper>
              {bottomCardVisible &&
                (selectedMarkerRef.current || markerData) && (
                  <S.Bottom
                    $bottomVisible={bottomCardVisible}
                    $bottomHeight={bottomHeight}
                  >
                    <Content
                      isCard={true}
                      place={
                        selectedMarkerRef.current
                          ? selectedMarkerRef.current.data
                          : markerData[0]
                      }
                    />
                  </S.Bottom>
                )}
            </S.BottomCardWrapper>
            <S.Bottom
              $bottomVisible={bottomSheetVisible}
              $bottomHeight={bottomHeight}
            >
              <BottomSheet
                setSelectedFilter={setSelectedFilter}
                selectedFilter={selectedFilter}
                placeMap={markerData}
              />
            </S.Bottom>
          </S.BottomSheetWrapper>
        </S.Wrapper>
      </S.MapWrapper>
    </S.Wrapper>
  );
}

export default Main;
