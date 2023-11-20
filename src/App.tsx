import { QueryClientProvider } from '@tanstack/react-query';

import './index.css';

import { AppRoutes } from '~components/Navigation/Routes';
import { queryClient } from '~config';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
