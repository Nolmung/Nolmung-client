import { LatLng } from '@/common/types';
import { DEFAULT_LATLNG } from '@/common/constants/defaultLatLng';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * 마운트 시 사용자의 현재 위치 받아옴 -> mapCenter 업데이트
 * */
export const useMapCenter = (): [
  LatLng,
  React.Dispatch<React.SetStateAction<LatLng>>,
] => {
  const [mapCenter, setMapCenter] = useState<LatLng>(DEFAULT_LATLNG);
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
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

  return [mapCenter, setMapCenter];
};
