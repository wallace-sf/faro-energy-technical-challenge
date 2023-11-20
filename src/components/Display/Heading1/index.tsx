import { type FC } from 'react';

import classNames from 'classnames';

export const Heading1: FC<JSX.IntrinsicElements['h1']> = ({
  children,
  ...props
}) => {
  return (
    <h1
      {...props}
      className={classNames(
        'text-3xl font-semibold text-dark',
        props.className,
      )}
    >
      {children}
    </h1>
  );
};
