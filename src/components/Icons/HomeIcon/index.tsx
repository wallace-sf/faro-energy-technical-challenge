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
      <path d="M54.4 62.3H43.3C40.1 62.3 37.4 59.7 37.4 56.4V45.8C37.4 45 36.8 44.4 36 44.4H28C27.2 44.4 26.6 45 26.6 45.8V56.4C26.6 59.7 24 62.3 20.7 62.3H9.60001C6.40001 62.3 3.70001 59.7 3.70001 56.4V22.7C3.70001 21 4.50001 19.5 5.90001 18.6L29.4 1.5C31 0.5 33 0.5 34.5 1.5L58 18.7C59.4 19.6 60.2 21.1 60.2 22.8V56.4C60.3 59.6 57.6 62.3 54.4 62.3ZM28 39.9H36C39.3 39.9 41.9 42.5 41.9 45.8V56.4C41.9 57.2 42.5 57.8 43.3 57.8H54.4C55.2 57.8 55.8 57.2 55.8 56.4V22.7C55.8 22.6 55.7 22.5 55.7 22.4L32.1 5.3C32 5.2 31.9 5.2 31.8 5.3L8.40001 22.4C8.30001 22.5 8.20001 22.6 8.20001 22.7V56.4C8.20001 57.2 8.80001 57.8 9.60001 57.8H20.7C21.5 57.8 22.1 57.2 22.1 56.4V45.8C22.1 42.6 24.7 39.9 28 39.9Z" />
    </svg>
  );
};

Component.displayName = 'HomeIcon';

export const HomeIcon = withIconBase(Component)('fill-current');
