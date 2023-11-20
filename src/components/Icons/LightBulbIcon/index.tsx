import { type FC } from 'react';

import { type SVGElementType } from '~/globalTypes';
import { withIconBase } from '~hocs';

const Component: FC<SVGElementType> = ({ ...props }) => {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M55.2001 24.9C55.2001 12.1 44.8 1.79999 32 1.79999C19.2 1.79999 8.80005 12.1 8.80005 24.9C8.80005 33.5 13.6 41.4 21.1 45.4V56.1C21.1 59.5 23.8001 62.2 27.2001 62.2H36.7001C40.1 62.2 42.8 59.5 42.8 56.1V45.4C50.4 41.4 55.2001 33.5 55.2001 24.9ZM38.4001 56.1C38.4001 57 37.7 57.7 36.8 57.7H27.3C26.4 57.7 25.7001 57 25.7001 56.1V46.2H38.4001V56.1ZM40.1 41.8H23.9C17.5 38.7 13.3 32.1 13.3 25C13.3 14.7 21.7 6.29999 32 6.29999C42.3 6.29999 50.7001 14.7 50.7001 25C50.7001 32.1 46.5 38.7 40.1 41.8Z" />
      <path d="M32.0001 10.4C30.8001 10.4 29.7001 11.4 29.7001 12.7V26.2C29.7001 27.4 30.7001 28.5 32.0001 28.5C33.2001 28.5 34.3001 27.5 34.3001 26.2V12.6C34.3001 11.4 33.2001 10.4 32.0001 10.4Z" />
      <path d="M32.0001 31.4C30.8001 31.4 29.7001 32.4 29.7001 33.7V34.2C29.7001 35.4 30.7001 36.5 32.0001 36.5C33.2001 36.5 34.3001 35.5 34.3001 34.2V33.7C34.3001 32.4 33.2001 31.4 32.0001 31.4Z" />
    </svg>
  );
};

Component.displayName = 'LightBulbIcon';

export const LightBulbIcon = withIconBase(Component)('fill-current');