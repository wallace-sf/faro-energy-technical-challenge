import { type SVGElementType } from '~/globalTypes';

export interface ChevronProps extends Omit<SVGElementType, 'direction'> {
  direction?: 'up' | 'down' | 'left' | 'right';
}
