import { useMemo, type FC } from 'react';

import classNames from 'classnames';

import { type ToggleSwitchProps } from './ToggleSwitchTypes';

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
  className,
  labelProps = {},
  ...props
}) => {
  const checked = useMemo(
    () => props.checked ?? props.defaultChecked,
    [props.checked, props.defaultChecked],
  );

  return (
    <label
      {...labelProps}
      id={`${props.id ?? ''}-label`}
      className={classNames(
        'relative inline-flex items-center cursor-pointer',
        {
          'cursor-not-allowed opacity-50': props.disabled,
        },
        labelProps.className,
      )}
    >
      <input
        {...{ ...props, touched: undefined, error: undefined }}
        type="checkbox"
        className={classNames('sr-only peer', className)}
      />
      <div
        className={classNames(
          "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600",
          {
            'peer-checked:bg-blue-600': checked,
          },
        )}
      />
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {props.label}
      </span>
    </label>
  );
};

export type { ToggleSwitchProps } from './ToggleSwitchTypes';
