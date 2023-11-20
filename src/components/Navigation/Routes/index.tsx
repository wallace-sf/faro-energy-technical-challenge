import { type FC, lazy, Suspense } from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

const AppLayout = lazy(
  async () => await import('~components/Layout/AppLayout'),
);

/* -- Pages -- */
const DashboardPage = lazy(async () => await import('~pages/DashboardPage'));

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index path="/" element={<DashboardPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </QueryParamProvider>
    </BrowserRouter>
  );
};
