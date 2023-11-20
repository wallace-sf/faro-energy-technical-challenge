import { type IOption } from '~/globalTypes';

export const DEFAULT_PAGE_SIZE = 12;

export const LIMIT_PAGE_OPTIONS: IOption[] = [
  {
    key: 'limit-12',
    label: '12 por página',
    value: '12',
  },
  {
    key: 'limit-24',
    label: '24 por página',
    value: '24',
  },
  {
    key: 'limit-36',
    label: '36 por página',
    value: '36',
  },
];
