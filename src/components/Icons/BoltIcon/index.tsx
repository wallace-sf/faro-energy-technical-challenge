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
      <path d="M28.4 62.3002C27.7 62.3002 27.1 62.2002 26.4 61.9002C24.5 61.0002 23.5 59.0002 23.9 56.9002L26.9 41.0002H8.59998C6.89998 41.0002 5.29998 40.0002 4.49998 38.5002C3.69998 37.0002 3.89998 35.1002 4.89998 33.7002L27.4 3.6002C28.6 2.0002 30.6 1.4002 32.5 2.0002C34.4 2.6002 35.6 4.3002 35.6 6.3002V20.4002H55.4C57.2 20.4002 58.8 21.4002 59.5 23.0002C60.3 24.6002 60 26.5002 58.9 27.8002L31.9 60.6002C31 61.7002 29.7 62.3002 28.4 62.3002ZM31 6.3002L8.49998 36.4002L29.6 36.5002C30.3 36.5002 30.9 36.8002 31.3 37.3002C31.7 37.8002 31.9 38.5002 31.8 39.2002L28.3 57.8002L28.4 57.9002L55.5 25.0002L33.4 24.9002C32.2 24.9002 31.1 23.9002 31.1 22.6002L31 6.3002Z" />
    </svg>
  );
};

Component.displayName = 'BoltIcon';

export const BoltIcon = withIconBase(Component)('fill-current');
