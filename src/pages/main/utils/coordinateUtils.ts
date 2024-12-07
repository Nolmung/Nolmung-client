import { PlaceRequestBody } from "@/service/apis/place/index.type";

/**
 * 현재 지도의 중심 좌표와 최대 좌표를 반환하는 함수
 */

export const getCurrentAndMaxCoordinate = (
  map: naver.maps.Map,
): PlaceRequestBody => {
  const bounds = map.getBounds();
  const center = map.getCenter();

  return {
    latitude: center.y,
    longitude: center.x,
    maxLatitude: bounds.maxY(),
    maxLongitude: bounds.maxX(),
  };
};
