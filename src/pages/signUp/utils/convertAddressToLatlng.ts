import axios from 'axios';

const convertAddressToLatlng = async (address: string) => {
  const naverGeocodeUrl = import.meta.env.VITE_KAKAO_GEOCODE_URL;
  const response = await axios.get(naverGeocodeUrl, {
    params: {
      query: address,
    },
    headers: {
      Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API}`,
    },
  });
  return {
    latitude: response.data.documents[0].y,
    longitude: response.data.documents[0].x,
  };
};

export default convertAddressToLatlng;
