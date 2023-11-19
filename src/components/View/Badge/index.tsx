import { type FC } from 'react';

import classNames from 'classnames';

import { type BadgeProps } from './BadgeTypes';
import { createBadgeVariant } from './BadgeUtils';

export const Badge: FC<BadgeProps> = ({ variant = 'default', children }) => {
  return (
    <span
      className={classNames(
        'text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300',
        createBadgeVariant(variant),
      )}
    >
      {children}
    </span>
  );
};
