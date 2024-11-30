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
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default Router;
