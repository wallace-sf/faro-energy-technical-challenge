import { type FC } from 'react';

import { type SVGElementType } from '~/globalTypes';
import { withIconBase } from '~hocs';

const Component: FC<SVGElementType> = ({ ...props }) => {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M60 55.2002H54.5999V35.5002C54.5999 32.3002 52 29.8002 48.9 29.8002H43.0999C39.8999 29.8002 37.4 32.4002 37.4 35.5002V55.2002H31.4V20.4002C31.4 17.2002 28.8 14.7002 25.7 14.7002H19.9C16.7 14.7002 14.2 17.3002 14.2 20.4002V55.2002H6.29995V6.5002C6.29995 5.3002 5.29995 4.2002 3.99995 4.2002C2.69995 4.2002 1.69995 5.2002 1.69995 6.5002V55.4002C1.69995 57.7002 3.59995 59.7002 5.99995 59.7002H60C61.2 59.7002 62.2999 58.7002 62.2999 57.4002C62.2999 56.1002 61.2 55.2002 60 55.2002ZM18.7 55.2002V20.4002C18.7 19.7002 19.2999 19.2002 19.9 19.2002H25.7C26.4 19.2002 26.9 19.8002 26.9 20.4002V55.2002H18.7ZM41.9 55.2002V35.5002C41.9 34.8002 42.5 34.3002 43.0999 34.3002H48.9C49.6 34.3002 50.0999 34.9002 50.0999 35.5002V55.2002H41.9Z" />
    </svg>
  );
};

Component.displayName = 'BarChartIcon';

export const BarChartIcon = withIconBase(Component)('fill-current');
