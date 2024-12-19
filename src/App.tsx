import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Router from './route/Router';
import GlobalStyle from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePageTracking from './service/googleAnalytics/usePageTracking';
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from 'react-ga4';
function App() {
  usePageTracking();
  const generateUUID = () => crypto.randomUUID();
  const uuid = generateUUID();
  ReactGA.set({ userId: uuid });

  const queryClient = new QueryClient();

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
        <ToastContainer
          position="bottom-center"
          autoClose={800}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{
            width: '100%', // 전체 화면 너비를 차지
          }}
          toastStyle={{
            width: '90%',
            maxWidth: '400px',
            borderRadius: '8px',
            padding: '16px',
            margin: '10px auto',
            maxHeight: '100px',
          }}
        />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
