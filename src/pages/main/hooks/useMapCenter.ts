import { LatLng } from '@/common/types';
import { DEFAULT_LATLNG } from '@/common/constants/defaultLatLng';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserLocation } from '../utils/userLocationUtils';

/**
 * 마운트 시 사용자의 현재 위치 받아옴 -> mapCenter 업데이트
 * */
export const useMapCenter = (): [
  LatLng,
  React.Dispatch<React.SetStateAction<LatLng>>,
] => {
  const [mapCenter, setMapCenter] = useState<LatLng>(DEFAULT_LATLNG);

  useEffect(() => {
    getUserLocation(
      (coords) => {
        setMapCenter({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      (error) => {
        console.error('사용자 위치를 가져오는 중 오류가 발생했습니다:', error);
      },
    );
  }, []);

  return [mapCenter, setMapCenter];
};
