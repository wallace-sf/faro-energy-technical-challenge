import classNames from 'classnames';

import { type VariantType } from '~/globalTypes';

export const createBadgeVariant = (variant: VariantType) => {
  return classNames({
    'bg-blue-100 text-blue-800': variant === 'default',
    'bg-gray-100 text-gray-800': variant === 'dark',
    'bg-red-100 text-red-800': variant === 'red',
    'bg-green-100 text-green-800': variant === 'green',
    'bg-yellow-100 text-yellow-800': variant === 'yellow',
    'bg-indigo-100 text-indigo-800': variant === 'indigo',
    'bg-purple-100 text-purple-800': variant === 'purple',
    'bg-pink-100 text-pink-800': variant === 'pink',
  });
};
