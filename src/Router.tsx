import { ROUTE } from '@common/constants/route';
import Main from '@pages/main';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Detail from './pages/detail';

function Router() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path={ROUTE.MAIN()} element={<Main />} />
        <Route path={ROUTE.DETAIL(':placeId')} element={<Detail />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
