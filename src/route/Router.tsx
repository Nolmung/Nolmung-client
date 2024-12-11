import { ROUTE } from '@common/constants/route';
import Main from '@pages/main';
import TodayMung from '@pages/todaymung';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import KakaoCallbackHandler from '../pages/login/components/KakaoCallbackHandler';
import MyDogs from '@/pages/my/components/myDogs';
import Layout from '../common/components/layout';
import Detail from '../pages/detail';
import Login from '../pages/login';
import SignUp from '../pages/signUp';
import Search from '../pages/search';
import Dogs from '../pages/dogs';
import Recommend from '../pages/recommend/index';
import TodayMungWrite from '../pages/todaymungWrite';
import TodayMungPlaceRegist from '../pages/todaymungPlaceRegist';
import MyReview from '../pages/myReview';
import MyFavorite from '../pages/myFavorite';
import TodayMungDetail from '../pages/todaymungDetail';
import Mypage from '../pages/my';
import TodayMungEdit from '../pages/todaymungEdit';
import DogsEdit from '../pages/dogEdit';
import PrivateRoute from './PrivateRoute';
import NotFound from '@/pages/404';
import UserEdit from '@/pages/userEdit';

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
          <Route path={ROUTE.MY_DOGS()} element={<PrivateRoute outlet={<MyDogs />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default Router;
