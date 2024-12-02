import { ROUTE } from '@common/constants/route';
import Main from '@pages/main';
import TodayMung from '@pages/todaymung';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './common/components/layout';
import Detail from './pages/detail';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Search from './pages/search';
import TodayMungWrite from './pages/todayMungWrite';
import TodayMungPlaceRegister from './pages/todayMungPlaceRegist';
import TodayMungDetail from './pages/todayMungDetail';

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
          <Route path={ROUTE.MAIN()} element={<Main />} />
          <Route path={ROUTE.TODAYMUNG()} element={<TodayMung />} />
          <Route path={ROUTE.DETAIL(':placeId')} element={<Detail />} />
          <Route path={ROUTE.LOGIN()} element={<Login />} />
          <Route path={ROUTE.SIGNUP()} element={<SignUp />} />
          <Route path={ROUTE.SEARCH()} element={<Search />} />
          <Route path={ROUTE.TODAYMUNG_WIRTE()} element={<TodayMungWrite />} />
          <Route
            path={ROUTE.TODAYMUNG_PLACE_REGISTER()}
            element={<TodayMungPlaceRegister />}
          />
          <Route
            path={ROUTE.TODAYMUNG_DETAIL(':diaryId')}
            element={<TodayMungDetail />}
          />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default Router;
