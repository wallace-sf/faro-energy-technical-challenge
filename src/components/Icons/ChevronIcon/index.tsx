import { type FC } from 'react';

import classNames from 'classnames';

import { withIconBase } from '~hocs';

import { type ChevronProps } from './ChevronIconTypes';

const Component: FC<ChevronProps> = ({ direction = 'down', ...props }) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={classNames(
        {
          'rotate-0': direction === 'down',
          'rotate-90': direction === 'left',
          'rotate-180': direction === 'up',
          'rotate-270': direction === 'right',
        },
        props.className,
      )}
    >
      <path d="M32 45.6002C31.4 45.6002 30.9 45.4002 30.4 45.0002L7.39998 22.4002C6.49998 21.5002 6.49998 20.1002 7.39998 19.2002C8.29998 18.3002 9.69998 18.3002 10.6 19.2002L32 40.1002L53.4 19.0002C54.3 18.1002 55.7 18.1002 56.6 19.0002C57.5 19.9002 57.5 21.3002 56.6 22.2002L33.6 44.8002C33.1 45.3002 32.6 45.6002 32 45.6002Z" />
    </svg>
  );
};

Component.displayName = 'ChevronIcon';

export const ChevronIcon = withIconBase(Component)('fill-current');
