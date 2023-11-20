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
      <path d="M45.3 11.9H41.9001V3.99995C41.9001 2.79995 40.9 1.69995 39.6 1.69995C38.3 1.69995 37.3 2.69995 37.3 3.99995V11.9H26.6V3.99995C26.6 2.79995 25.6 1.69995 24.3 1.69995C23 1.69995 22 2.69995 22 3.99995V11.9H18.6C16.3 11.9 14.3 13.8 14.3 16.2V28.6C14.3 35.9 20.3 41.9 27.6 41.9H29.6V60C29.6 61.2 30.6 62.2999 31.9 62.2999C33.1 62.2999 34.2001 61.2999 34.2001 60V41.9H36.2001C43.5 41.9 49.5 35.9 49.5 28.6V16.2C49.5 13.8 47.6 11.9 45.3 11.9ZM45 28.6C45 33.5 41 37.4 36.2001 37.4H27.8C22.9 37.4 19 33.4 19 28.6V16.4H45V28.6Z" />
    </svg>
  );
};

Component.displayName = 'PlugIcon';

export const PlugIcon = withIconBase(Component)('fill-current');
