// 유틸리티 함수: 사용자 위치 가져오기
export const getUserLocation = (
  onSuccess: (coords: { latitude: number; longitude: number }) => void,
  onError?: (error: GeolocationPositionError) => void,
) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        onSuccess({ latitude, longitude });
      },
      (error) => {
        console.error('위치 정보를 불러올 수 없습니다:', error);
        onError?.(error); // onError 콜백이 제공되면 호출
      },
    );
  } else {
    console.warn('브라우저가 위치 정보를 지원하지 않습니다.');
  }
};
