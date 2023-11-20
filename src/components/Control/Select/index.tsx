import { useMemo, type FC } from 'react';

import classNames from 'classnames';

import { type SelectProps } from './SelectTypes';

export const Select: FC<SelectProps> = ({
  options = [],
  className,
  touched,
  error,
  enableValidationBorder,
  showDefaultOption = true,
  defaultOptionLabel = 'Selecione uma opção',
  ...props
}) => {
  const renderedOptions = useMemo(() => {
    return options.map(({ key, label, value }) => (
      <option key={key} value={value}>
        {label}
      </option>
    ));
  }, [options]);

  return (
    <select
      {...props}
      className={classNames(
        'relative w-full appearance-none rounded border border-stroke bg-transparent p-3 outline-none transition focus:border-blue-500 active:border-blue-500 disabled:cursor-default placeholder:font-normal placeholder:text-gray-400 pr-10',
        props.value === '' ? 'font-normal text-gray-400' : '',
        className,
      )}
    >
      {showDefaultOption ? (
        <option value="">{defaultOptionLabel}</option>
      ) : null}
      {renderedOptions}
    </select>
  );
};

export type { SelectProps } from './SelectTypes';
