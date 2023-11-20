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
      <path d="M57.5 24.0998C60.1 24.0998 62.3 21.8998 62.3 19.2998V16.0998C62.3 13.9998 60.9001 12.0998 58.9001 11.4998L27.9 1.9998C27.4 1.8998 27 1.7998 26.5 1.7998H14.2C11.6 1.7998 9.40005 3.9998 9.40005 6.5998V19.2998C9.40005 21.8998 11.6 24.0998 14.2 24.0998H17V42.4998H8.00005C4.60005 42.4998 1.80005 45.2998 1.80005 48.6998V55.9998C1.80005 59.3998 4.60005 62.1998 8.00005 62.1998H30.5C33.9001 62.1998 36.8 59.3998 36.8 55.9998V48.6998C36.8 45.2998 34 42.4998 30.5 42.4998H21.5V24.0998H50.1V34.9998C50.1 37.0998 51.6001 38.9998 53.7001 39.4998C56.4001 40.1998 58.1 42.8998 57.6 45.6998C57.2 47.7998 55.4 49.5998 53.3 49.9998C51.7001 50.2998 50.1 49.8998 48.8 48.7998C47.6 47.7998 46.9001 46.2998 46.9001 44.6998C46.9001 44.0998 47 43.4998 47.2001 42.8998C47.6001 41.6998 47 40.3998 45.8 39.9998C44.6 39.5998 43.3001 40.1998 42.9001 41.3998C42.5 42.4998 42.3 43.5998 42.3 44.6998C42.3 47.5998 43.6 50.3998 45.8 52.2998C47.6 53.7998 49.8 54.5998 52.2001 54.5998C52.8 54.5998 53.4001 54.4998 54 54.3998C58 53.6998 61.3 50.3998 62 46.3998C62.9001 41.1998 59.8 36.3998 54.8 35.0998C54.6 35.0998 54.6 34.9998 54.6 34.8998V24.0998H57.5ZM32.3 48.6998V55.9998C32.3 56.9998 31.5 57.7998 30.5 57.7998H8.00005C7.00005 57.7998 6.20005 56.9998 6.20005 55.9998V48.6998C6.20005 47.7998 7.00005 46.9998 8.00005 46.9998H30.5C31.5 46.9998 32.3 47.7998 32.3 48.6998ZM57.8 16.0998V19.2998C57.8 19.4998 57.7001 19.5998 57.5 19.5998H29.2001V6.9998L57.6 15.6998C57.7 15.7998 57.8 15.8998 57.8 16.0998ZM13.9 19.2998V6.4998C13.9 6.2998 14 6.1998 14.2 6.1998H24.7001V19.4998H14.2C14 19.5998 13.9 19.3998 13.9 19.2998Z" />
    </svg>
  );
};

Component.displayName = 'ConstructionIcon';

export const ConstructionIcon = withIconBase(Component)('fill-current');
