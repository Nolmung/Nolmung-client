/** @Todo axios 인스턴스 만들기, interceptor 설정 */

import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${localStorage.getItem('accessToken')}`,
  },
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response.status === 403) {
      alert('세션이 만료되었습니다. 재로그인해주세요');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
