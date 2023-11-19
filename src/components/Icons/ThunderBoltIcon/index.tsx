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
      <path d="M25.4 62.2998C25 62.2998 24.6 62.1998 24.1 62.0998C22.6 61.4998 21.8 60.0998 22 58.4998L24.4 38.1998L16.9 39.6998C15.5 39.9998 14.1 39.3998 13.4 38.1998C12.6 36.9998 12.7 35.4998 13.5 34.3998L35.9 3.19984C36.8 1.89984 38.5 1.49984 39.9 1.99984C41.4 2.59984 42.2 3.99984 42 5.59984L39.1 26.5998L46.9 24.6998C48.3 24.2998 49.7 24.8998 50.5 26.0998C51.3 27.2998 51.3 28.7998 50.4 29.9998L28.1 60.7998C27.5 61.7998 26.4 62.2998 25.4 62.2998ZM25.7 33.3998C26.6 33.3998 27.4 33.6998 28 34.2998C28.8 34.9998 29.2 36.0998 29.1 37.1998L27 54.7998L45.1 29.7998L38.7 31.3998C37.6 31.6998 36.4 31.3998 35.6 30.5998C34.8 29.7998 34.4 28.6998 34.5 27.5998L37 9.39984L18.7 34.6998L25 33.4998C25.2 33.3998 25.5 33.3998 25.7 33.3998Z" />
    </svg>
  );
};

Component.displayName = 'ThunderBoltIcon';

export const ThunderBoltIcon = withIconBase(Component)('fill-current');
