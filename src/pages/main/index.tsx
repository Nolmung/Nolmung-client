import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {Marker} from './index.type';
import { CafeMarker } from '@/assets/images/svgs';
import { useNavigate } from 'react-router-dom';

const getDataArray = [
  {
    "placeId": 1, 
    "name": "더왈츠",
    "category": "cafe",
    "roadAddress": "서울특별시 강남구 역삼로 134",
    "placeImgUrl": "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240301_247%2F1709283092996Yjmow_JPEG%2FIMG_3922.jpeg",
    "starRatingAvg": 5,
    "reviewCount": 0,
    "latitude": 37.49413412, // 위도
    "longitude": 127.034306, // 경도
  }
]

function Main() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [addressX, setAddressX] = useState<number>(37.49413412); 
  const [addressY, setAddressY] = useState<number>(127.034306);

  // 지도 이동 시 노출된 부분만 마커를 표시하기 위함 -> map을 state로 관리
  const [newMap, setNewMap] = useState<naver.maps.Map | null>(null);

  const { naver } = window; // 이거 쓰는 이유가 뭐임? 명시 위함임?
  let map: naver.maps.Map;

  const navigate = useNavigate();

  const initMap = () => {
    if (!mapRef.current || !naver) return; // null 체크 추가 -> 약간 부가적인듯
    const center = new naver.maps.LatLng(addressX, addressY); 
    const mapOptions: naver.maps.MapOptions = {
      //지도의 초기 중심 좌표
      center: center,
      zoom: 17,
      minZoom: 11,
      maxZoom: 18,
    };
    // 위 옵션을 바탕으로 지도 생성
    map = new naver.maps.Map(mapRef.current, mapOptions);
    setNewMap(map);
  }

  const handleMarkerClick = (id: number) => {
    navigate(`/detail/${id}`);
  }

  const addMarker = (data: Marker) => {
    try {
      let newMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(data.latitude, data.longitude),
        map,
        title: data.name,
        clickable: true,
        icon: {
          content: Marker,
          size: new naver.maps.Size(43, 43),
        }
      });
      naver.maps.Event.addListener(newMarker, 'click', () => 
        handleMarkerClick(data.placeId)
      );
    } catch (e) {}
  }

  const initMarkers = () => {
    getDataArray.forEach((data) => {
      addMarker(data);
    });
  }

  useEffect(() => {
    if (!mapRef.current || !naver) return;
    initMap();
    initMarkers();
  }, [addressX, addressY]);

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
