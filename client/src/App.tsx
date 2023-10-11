import React from 'react';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='max-w-3xl m-auto'>
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
