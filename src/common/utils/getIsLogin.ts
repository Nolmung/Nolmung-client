/** 로그인 여부를 확인하는 함수 */
const getIsLogin = () => {
  return !!localStorage.getItem('accessToken');
};
export default getIsLogin;
