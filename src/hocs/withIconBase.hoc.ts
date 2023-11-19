import { type FC, memo, createElement } from 'react';

import classNames from 'classnames';

import { type SVGElementType } from '~/globalTypes';

export const withIconBase =
  <T extends SVGElementType>(Component: FC<T>) =>
  (className?: T['className']) => {
    const DynamicComponent: typeof Component = (props) => {
      return createElement(Component, {
        ...props,
        className: classNames(props.className, className),
      });
    };

    return memo(DynamicComponent);
  };
