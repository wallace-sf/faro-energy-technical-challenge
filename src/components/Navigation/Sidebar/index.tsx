import { type FC } from 'react';

import { Link } from 'react-router-dom';

import {
  BoltIcon,
  ThunderIcon,
  HomeIcon,
  LeafIcon,
  PieChartAltIcon,
  RepairToolsIcon,
  BarChartIcon,
} from '~components/Icons';

export const Sidebar: FC = () => {
  return (
    <>
      <aside
        id="sidebar"
        className="fixed top-0 left-0 z-20 flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width hidden"
        aria-label="Sidebar"
      >
        <div className="relative h-full flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              <ul className="pb-2 space-y-2">
                <li>
                  <Link
                    to="#"
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <HomeIcon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <PieChartAltIcon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3">Monitoramento</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <BoltIcon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3">Consumo de energia</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <BarChartIcon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3">Desempenho financeiro</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <LeafIcon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3">Sustentabilidade</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <RepairToolsIcon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3">Histórico de manutenção</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <ThunderIcon className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3">Previsões metereológicas</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
