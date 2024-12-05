import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Router from './Router';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  const queryClient = new QueryClient();
  const setScreenHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenHeight();
    window.addEventListener('resize', setScreenHeight);
    return () => {
      window.removeEventListener('resize', setScreenHeight);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
