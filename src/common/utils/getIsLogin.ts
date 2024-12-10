const getIsLogin = () => {
  return !!localStorage.getItem('token');
};
export default getIsLogin;
