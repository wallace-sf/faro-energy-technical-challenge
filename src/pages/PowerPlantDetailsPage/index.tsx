import { useMemo, type FC } from 'react';

import Chart from 'react-apexcharts';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useEffectOnce } from 'usehooks-ts';

import { type IPowerPlant } from '~/globalTypes';
import { ToggleSwitch } from '~components/Control';
import {
  MapMarkerIcon,
  ThunderBoltIcon,
  ConstructionIcon,
  FactoryIcon,
  WrenchIcon,
  LightBulbIcon,
  TieIcon,
  PlugIcon,
  HourglassIcon,
  SizeIcon,
  ShieldAltIcon,
  SignalIcon,
  CheckMarkIcon,
} from '~components/Icons';
import { Badge } from '~components/View';
import { getVariantByStatus } from '~helpers';

import { createChartOptions, createSeries } from './PowerPlantDetailsUtils';

const PowerPlantDetailsPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const powerPlant = useMemo(
    () => location.state ?? null,
    [location],
  ) as IPowerPlant | null;

  useEffectOnce(() => {
    if (powerPlant == null) navigate('/');
  });

  return (
    <>
      <nav className="flex mb-4 ml-1" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-blue-500 md:ms-2 dark:text-gray-400">
                Usina Solar
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div className="flow-root">
          <h3 className="text-xl font-semibold dark:text-white mb-2">
            {powerPlant?.nome ?? ''}
          </h3>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {powerPlant?.descricao ?? ''}
          </p>

          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <CheckMarkIcon className="w-6 h-6 dark:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Status
                  </p>
                  <Badge variant={getVariantByStatus(powerPlant?.status ?? '')}>
                    {powerPlant?.status ?? ''}
                  </Badge>
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <MapMarkerIcon className="w-6 h-6 dark:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Localização
                  </p>
                  <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    {powerPlant?.localizacao ?? ''}
                  </p>
                </div>
              </div>
            </li>
            <li className="pt-4 pb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <ThunderBoltIcon className="w-6 h-6 dark:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Capacidade
                  </p>
                  <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    {powerPlant?.capacidade ?? ''}
                  </p>
                </div>
              </div>
            </li>
            <li className="pt-4 pb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <ConstructionIcon className="w-6 h-6 dark:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Ano de Construção
                  </p>
                  <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    {powerPlant?.anoConstrucao ?? ''}
                  </p>
                </div>
              </div>
            </li>
            <li className="pt-4 pb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FactoryIcon className="w-6 h-6 dark:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Fabricante de Painéis
                  </p>
                  <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    {powerPlant?.fabricantePaineis ?? ''}
                  </p>
                </div>
              </div>
            </li>
            <li className="pt-4 pb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <WrenchIcon className="w-6 h-6 dark:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Ano Última Manutenção
                  </p>
                  <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    {powerPlant?.anoUltimaManutencao ?? ''}
                  </p>
                </div>
              </div>
            </li>
            <li className="pt-4 pb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <LightBulbIcon className="w-6 h-6 dark:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Eficiência dos Painéis
                  </p>
                  <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    {powerPlant?.eficienciaPaineis ?? ''}
                  </p>
                </div>
              </div>
            </li>
            <li className="pt-4 pb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <TieIcon className="w-6 h-6 dark:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Propretário
                  </p>
                  <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    {powerPlant?.proprietario ?? ''}
                  </p>
                </div>
              </div>
            </li>
            <li className="pt-4 pb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <PlugIcon className="w-6 h-6 dark:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Subestação
                  </p>
                  <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    {powerPlant?.subestacao ?? ''}
                  </p>
                </div>
              </div>
            </li>
            <li className="pt-4 pb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <HourglassIcon className="w-6 h-6 dark:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Tempo de Vida Estimado
                  </p>
                  <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    {powerPlant?.tempoVidaEstimado ?? ''}
                  </p>
                </div>
              </div>
            </li>
            <li className="pt-4 pb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <SizeIcon className="w-6 h-6 dark:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Área Total
                  </p>
                  <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    {powerPlant?.areaTotal ?? ''}
                  </p>
                </div>
              </div>
            </li>
            <li className="pt-4 pb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <PlugIcon className="w-6 h-6 dark:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Garantia dos Equipamentos
                  </p>
                  <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    {powerPlant?.garantiaEquipamentos ?? ''}
                  </p>
                </div>
              </div>
            </li>
            <li className="pt-4 pb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <ShieldAltIcon className="w-6 h-6 dark:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                    Garantia dos Equipamentos
                  </p>
                  <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                    {powerPlant?.contratoEnergia ?? ''}
                  </p>
                </div>
              </div>
            </li>
            <li className="pt-4 pb-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <SignalIcon className="w-6 h-6 dark:text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <ToggleSwitch
                    label="Monitoramento Remoto"
                    defaultChecked={powerPlant?.monitoramentoRemoto ?? false}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row lg:gap-3">
        <div className="xl:max-w-1/2 w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mb-3 lg:mb-0">
          <div className="flex justify-between">
            <div>
              <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                Produção
              </h5>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Produção Mensal de Energia Solar ao Longo do Ano
              </p>
            </div>
            <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
              12%
              <svg
                className="w-3 h-3 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13V1m0 0L1 5m4-4 4 4"
                />
              </svg>
            </div>
          </div>
          <div>
            <Chart
              options={createChartOptions(powerPlant?.producao ?? null)}
              type="area"
              series={createSeries(powerPlant?.producao ?? null)}
            />
          </div>
        </div>
        <div className="xl:max-w-1/2 w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
          <div className="flex justify-between">
            <div>
              <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                Irradiação
              </h5>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Níveis Mensais de Irradiação Solar Durante o Ano
              </p>
            </div>
            <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
              12%
              <svg
                className="w-3 h-3 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13V1m0 0L1 5m4-4 4 4"
                />
              </svg>
            </div>
          </div>
          <div>
            <Chart
              options={createChartOptions(powerPlant?.irradiacao ?? null)}
              type="area"
              series={createSeries(powerPlant?.irradiacao ?? null)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerPlantDetailsPage;
