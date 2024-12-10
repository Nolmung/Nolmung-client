import { ROUTE } from '@common/constants/route';
import Main from '@pages/main';
import TodayMung from '@pages/todaymung';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import KakaoCallbackHandler from './pages/login/components/KakaoCallbackHandler';

import Layout from './common/components/layout';
import Detail from './pages/detail';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Search from './pages/search';
import Dogs from './pages/dogs';
import Recommend from './pages/recommend/index';
import TodayMungWrite from './pages/todaymungWrite';
import TodayMungPlaceRegist from './pages/todaymungPlaceRegist';
import MyReview from './pages/myReview';
import MyFavorite from './pages/myFavorite';
import TodayMungDetail from './pages/todaymungDetail';
import Mypage from './pages/my';
import TodayMungEdit from './pages/todaymungEdit';
import DogsEdit from './pages/dogEdit';
import UserEdit from './pages/userEdit';
import MyDogs from './pages/my/components/myDogs';

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

// 팝업 컴포넌트 정의
function AddressPopup() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="/addressPopup.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title="주소 검색"
        allowFullScreen
      />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<div></div>}>
      <Layout>
        <Routes>
          <Route path={ROUTE.MAIN()} element={<Main />} />
          <Route path={ROUTE.TODAYMUNG()} element={<TodayMung />} />
          <Route path={ROUTE.DETAIL(':placeId')} element={<Detail />} />
          <Route path={ROUTE.LOGIN()} element={<Login />} />
          <Route
            path={ROUTE.KAKAOCALLBACKHANDLER()}
            element={<KakaoCallbackHandler />}
          />
          <Route path={ROUTE.SIGNUP()} element={<SignUp />} />
          <Route path={ROUTE.SEARCH()} element={<Search />} />
          <Route path={ROUTE.DOGS()} element={<Dogs />} />
          <Route path={ROUTE.MY_REVIEW()} element={<MyReview />} />
          <Route path={ROUTE.PLACE_RECOMMEND()} element={<Recommend />} />
          <Route path={ROUTE.TODAYMUNG_WRITE()} element={<TodayMungWrite />} />
          <Route
            path={ROUTE.TODAYMUNG_PLACE_REGIST()}
            element={<TodayMungPlaceRegist />}
          />
          <Route path={ROUTE.MY()} element={<Mypage />} />
          <Route path={ROUTE.MYFAVORITE()} element={<MyFavorite />} />
          <Route
            path={ROUTE.TODAYMUNG_DETAIL(':diaryId')}
            element={<TodayMungDetail />}
          />
          <Route
            path={ROUTE.TODAYMUNG_EDIT(':diaryId')}
            element={<TodayMungEdit />}
          />
          <Route path={ROUTE.DOGSEDIT(':dogId')} element={<DogsEdit />} />
          <Route path={ROUTE.ADDRESS_POPUP()} element={<AddressPopup />} />
          <Route path={ROUTE.USER_EDIT()} element={<UserEdit />} />
          <Route path={ROUTE.MY_DOGS()} element={<MyDogs />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default Router;
