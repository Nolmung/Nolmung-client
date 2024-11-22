import { ROUTE } from '@common/constants/route';
import Main from '@pages/main';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './common/components/Layout';

function Router() {
  return (
    <Suspense fallback={<div></div>}>
      <Layout>
        <Routes>
          <Route path={ROUTE.MAIN()} element={<Main />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default Router;
