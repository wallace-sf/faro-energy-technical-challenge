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
      <path d="M32 1.79999C18.2 1.79999 7 12.6 7 25.9C7 36 20.4 52 28.3 60.6C29.3 61.7 30.6 62.2 32 62.2C33.4 62.2 34.7 61.6 35.7 60.6C43.6 52 57 36 57 25.9C57 12.6 45.8 1.79999 32 1.79999ZM32.4 57.6C32.2 57.8 31.9 57.8 31.6 57.6C21.9 47 11.5 33.2 11.5 25.9C11.5 15.1 20.7 6.29999 32 6.29999C43.3 6.29999 52.5 15.1 52.5 25.9C52.5 33.2 42.1 47 32.4 57.6Z" />
      <path d="M32 15.7C26 15.7 21.1 20.6 21.1 26.6C21.1 32.6 26 37.6 32 37.6C38 37.6 42.9 32.7 42.9 26.7C42.9 20.7 38 15.7 32 15.7ZM32 33.1C28.4 33.1 25.6 30.2 25.6 26.7C25.6 23.2 28.5 20.3 32 20.3C35.5 20.3 38.4 23.2 38.4 26.7C38.4 30.2 35.6 33.1 32 33.1Z" />
    </svg>
  );
};

Component.displayName = 'MapMarkerIcon';

export const MapMarkerIcon = withIconBase(Component)('fill-current');
