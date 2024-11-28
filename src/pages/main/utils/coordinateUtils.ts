import { LatLng } from '@/common/types';

/**
 * 현 지도에서 검색 버튼 클릭 함수
 * @Todo 현 지도에서 검색 버튼 UI 구현 후 연결하기
 */
export const getCurrentAndMaxCoordinate = (
  map: naver.maps.Map,
): { currentCenter: LatLng; maxBounds: LatLng } => {
  const bounds = map.getBounds();
  const center = map.getCenter();

  return {
    currentCenter: { latitude: center.y, longitude: center.x },
    maxBounds: { latitude: bounds.maxY(), longitude: bounds.maxX() },
  };
};
