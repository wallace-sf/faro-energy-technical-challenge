import { type PropsWithChildren } from 'react';

import { type VariantType } from '~/globalTypes';

export interface BadgeProps extends PropsWithChildren {
  variant?: VariantType;
  title?: string;
}
