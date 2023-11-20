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
      <path d="M61.6 58.2L48.6 45.3C51.6 41.6 53.1 37.2 53.1 32.4C53.1 25.3 49.6 17.9 43.2 11.6C26.6 -5 5.99998 4.9 5.79998 5L5.19998 5.3L4.79998 6C4.69998 6.2 -5.20002 26.7 11.5 43.2C18 49.7 25.6 53 32.5 53C37.2 53 41.6 51.5 45.4 48.4L58.4 61.3C58.8 61.7 59.4 62 60 62C60.6 62 61.2 61.8 61.6 61.3C62.5 60.5 62.5 59.1 61.6 58.2ZM14.6 40C1.79998 27.2 7.09998 12.1 8.49998 8.7C12 7.2 27.2 2 40.1 14.8C45.6 20.3 48.6 26.5 48.6 32.5C48.6 36.1 47.5 39.4 45.3 42.2L38 34.9V22.2C38 21 37 19.9 35.7 19.9C34.4 19.9 33.4 20.9 33.4 22.2V30.4L25.2 22.2C24.3 21.3 22.9 21.3 22 22.2C21.1 23.1 21.1 24.5 22 25.4L27.8 31.2H19.6C18.4 31.2 17.3 32.2 17.3 33.5C17.3 34.7 18.3 35.8 19.6 35.8H32.3L42 45.4C34.7 51 23.7 49 14.6 40Z" />
    </svg>
  );
};

Component.displayName = 'LeafIcon';

export const LeafIcon = withIconBase(Component)('fill-current');
