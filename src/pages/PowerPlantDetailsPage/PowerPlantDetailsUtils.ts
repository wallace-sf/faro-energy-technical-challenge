import { type Props } from 'react-apexcharts';

import { type IChartValue } from '~/globalTypes';

export const createSeries = (chartValue: IChartValue[] | null) => {
  return [
    {
      name: 'Valor',
      data: chartValue?.map((item) => item.valor) ?? [],
      color: '#1A56DB',
    },
  ];
};

export const createCategories = (chartValue: IChartValue[] | null) => {
  return chartValue?.map((item) => item.mes) ?? [];
};

export const createChartOptions = (
  chartValue: IChartValue[] | null,
): Props['options'] => {
  return {
    chart: {
      height: '100%',
      width: '100%',
      fontFamily: 'Inter, sans-serif',
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    xaxis: {
      categories: createCategories(chartValue),
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: '#1C64F2',
        gradientToColors: ['#1C64F2'],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
  };
};
