import React from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import { ROUTE } from '@common/constants/route';
const Layout = React.lazy(() => import('@common/components/layout'));

const Main = React.lazy(() => import('@pages/main'));
const Detail = React.lazy(() => import('@pages/detail'));
const Search = React.lazy(() => import('@pages/search'));
const Login = React.lazy(() => import('@pages/login'));
const SignUp = React.lazy(() => import('@pages/signUp'));
const Recommend = React.lazy(() => import('@pages/recommend'));
const TodayMung = React.lazy(() => import('@pages/todaymung'));
const TodayMungDetail = React.lazy(() => import('@pages/todaymungDetail'));
const TodayMungWrite = React.lazy(() => import('@pages/todaymungWrite'));
const TodayMungEdit = React.lazy(() => import('@pages/todaymungEdit'));
const TodayMungPlaceRegist = React.lazy(
  () => import('@pages/todaymungPlaceRegist'),
);
const Mypage = React.lazy(() => import('@pages/my'));
const UserEdit = React.lazy(() => import('@pages/userEdit'));
const Dogs = React.lazy(() => import('@pages/dogs'));
const MyDogs = React.lazy(() => import('@pages/my/components/myDogs'));
const DogsEdit = React.lazy(() => import('@pages/dogEdit'));
const MyReview = React.lazy(() => import('@pages/myReview'));
const MyFavorite = React.lazy(() => import('@pages/main'));
const NotFound = React.lazy(() => import('@pages/404'));
const KakaoCallbackHandler = React.lazy(
  () => import('@pages/login/components/KakaoCallbackHandler'),
);

// react-router-dom v7에 관한 Future Flag 경고창 무시
const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('React Router Future Flag Warning')
  ) {
    return;
  }
  originalWarn(...args);
};

function Router() {
  return (
    <Suspense fallback={<div></div>}>
      <Layout>
        <Routes>
          {/** 비로그인 접근 가능*/}
          <Route path={ROUTE.LOGIN()} element={<Login />} />
          <Route
            path={ROUTE.KAKAOCALLBACKHANDLER()}
            element={<KakaoCallbackHandler />}
          />
          <Route path={ROUTE.MAIN()} element={<Main />} />
          <Route path={ROUTE.DETAIL(':placeId')} element={<Detail />} />

          <Route path={ROUTE.SIGNUP()} element={<SignUp />} />
          <Route path={ROUTE.SEARCH()} element={<Search />} />
          <Route path={ROUTE.DOGS()} element={<Dogs />} />
          <Route path={ROUTE.PLACE_RECOMMEND()} element={<Recommend />} />
          <Route
            path={ROUTE.TODAYMUNG_DETAIL(':diaryId')}
            element={<TodayMungDetail />}
          />

          {/** 비로그인 접근 불가*/}
          <Route
            path={ROUTE.TODAYMUNG_EDIT(':diaryId')}
            element={<PrivateRoute outlet={<TodayMungEdit />} />}
          />
          <Route
            path={ROUTE.MY_REVIEW()}
            element={<PrivateRoute outlet={<MyReview />} />}
          />
          <Route
            path={ROUTE.TODAYMUNG_WRITE()}
            element={<PrivateRoute outlet={<TodayMungWrite />} />}
          />
          <Route
            path={ROUTE.USER_EDIT()}
            element={<PrivateRoute outlet={<UserEdit />} />}
          />
          <Route
            path={ROUTE.TODAYMUNG_PLACE_REGIST()}
            element={<PrivateRoute outlet={<TodayMungPlaceRegist />} />}
          />
          <Route
            path={ROUTE.DOGSEDIT(':dogId')}
            element={<PrivateRoute outlet={<DogsEdit />} />}
          />
          <Route path={ROUTE.MY_DOGS()} element={<MyDogs />} />
          <Route
            path={ROUTE.TODAYMUNG()}
            element={<PrivateRoute outlet={<TodayMung />} />}
          />
          <Route
            path={ROUTE.MY()}
            element={<PrivateRoute outlet={<Mypage />} />}
          />
          <Route
            path={ROUTE.MYFAVORITE()}
            element={<PrivateRoute outlet={<MyFavorite />} />}
          />
          <Route
            path={ROUTE.MY_DOGS_ADD()}
            element={<PrivateRoute outlet={<Dogs />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default Router;
