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
      <path d="M24.8999 13.2998C25.0999 14.2998 25.9999 15.0998 27.0999 15.0998H36.8999C37.9999 15.0998 38.8999 14.3998 39.0999 13.2998L40.8999 4.4998C40.9999 3.7998 40.8999 3.0998 40.3999 2.5998C39.9999 2.0998 39.2999 1.7998 38.6999 1.7998H25.2999C24.5999 1.7998 23.9999 2.0998 23.5999 2.5998C23.1999 3.0998 22.9999 3.7998 23.0999 4.4998L24.8999 13.2998ZM35.9999 6.1998L35.0999 10.4998H28.9999L27.9999 6.1998H35.9999Z" />
      <path d="M36.9 18H27.1C25.9 18 24.9 18.9 24.9 20.1L23 51.8C23 52.4 23.2 52.9 23.5 53.4L30.2 61.4C30.6 61.9 31.3 62.2 31.9 62.2C32.5 62.2 33.2 61.9 33.6 61.4L40.3 53.4C40.7 53 40.9 52.4 40.8 51.8L39 20.1C39.1 18.9 38.1 18 36.9 18ZM32 56.5L27.6 51.2L29.3 22.5H34.8L36.5 51.2L32 56.5Z" />
    </svg>
  );
};

Component.displayName = 'TieIcon';

export const TieIcon = withIconBase(Component)('fill-current');
