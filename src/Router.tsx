import { ROUTE } from '@common/constants/route';
import Main from '@pages/main';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './common/components/Layoutaaa';

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
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default Router;
