import GuestRecommend from './components/IndexGuest';
// const GuestRecommend = React.lazy(() => import('@pages/login'));
import UserRecommend from './components/IndexUser';

function Recommend() {
  const isGuest =
    localStorage.getItem('accessToken') === null ||
    localStorage.getItem('accessToken') === undefined;
  return isGuest ? <GuestRecommend /> : <UserRecommend />;
}

export default Recommend;
