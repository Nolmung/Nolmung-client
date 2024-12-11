/** @Todo axios 인스턴스 만들기, interceptor 설정 */

import axios from 'axios';
// import { ROUTE } from '@common/constants/route';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwiZW1haWwiOiJoeW9yaXNoMjAwMUBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTczMzkwNTYwNCwiZXhwIjoxNzM0NTEwNDA0fQ.4iTPZMrwvokOt38uJWQ8NAKMX5a6u-AVk7o1VSe-8xs',
  },
});

// Axios 요청 인터셉터 설정
instance.interceptors.request.use(
  (config) => {
    const accessToken =
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwiZW1haWwiOiJoeW9yaXNoMjAwMUBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTczMzkwNTYwNCwiZXhwIjoxNzM0NTEwNDA0fQ.4iTPZMrwvokOt38uJWQ8NAKMX5a6u-AVk7o1VSe-8xs';
    if (accessToken) {
      config.headers['Authorization'] = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    // if (error.response && error.response.status === 401) {
    //   alert('세션이 만료되었습니다. 재로그인해주세요');
    //   window.location.href = ROUTE.LOGIN();
    //   localStorage.removeItem('accessToken');
    // }
    return Promise.reject(error);
  },
);
