import { type FC } from 'react';

import classNames from 'classnames';

import { Heading1 } from '../Heading1';
import { type PageTitleProps } from './PageTitleTypes';

export const PageTitle: FC<PageTitleProps> = ({ title, className }) => {
  return (
    <section className="py-[30px]">
      <div className="mx-auto px-4">
        <div
          className={classNames(
            'flex flex-col justify-start items-start',
            className,
          )}
        >
          <Heading1 className="mb-2">{title}</Heading1>
        </div>
      </div>
    </section>
  );
};
