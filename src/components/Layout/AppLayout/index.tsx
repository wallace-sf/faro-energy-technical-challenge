import { type FC } from 'react';

import { Outlet } from 'react-router-dom';

import { Sidebar } from '~components/Navigation/Sidebar';

import { AppHeader } from './AppHeader';

const AppLayout: FC = (): JSX.Element => {
  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-800">
      <AppHeader />
      <section className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900 h-full">
        <Sidebar />
        <div className="relative w-full h-full overflow-y-auto px-4 py-6 bg-gray-50 lg:ml-64 dark:bg-gray-900">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default AppLayout;
