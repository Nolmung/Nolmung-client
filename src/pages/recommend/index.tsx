import React from 'react';
const GuestRecommend = React.lazy(
  () => import('@pages/recommend/components/IndexGuest'),
);
const UserRecommend = React.lazy(
  () => import('@pages/recommend/components/IndexUser'),
);

function Recommend() {
  const isGuest =
    localStorage.getItem('accessToken') === null ||
    localStorage.getItem('accessToken') === undefined;
  return isGuest ? <GuestRecommend /> : <UserRecommend />;
}

export default Recommend;
