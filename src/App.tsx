import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Router from './Router';
import GlobalStyle from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
      <ToastContainer position="bottom-center" autoClose={800} />
    </QueryClientProvider>
  );
}

export default App;
