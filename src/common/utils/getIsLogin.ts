const getIsLogin = () => {
  return !!localStorage.getItem('accessToken');
};
export default getIsLogin;
