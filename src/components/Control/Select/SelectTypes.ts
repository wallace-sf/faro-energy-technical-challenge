import { type IOption } from '~/globalTypes';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: IOption[];
  error?: boolean;
  touched?: boolean;
  showDefaultOption?: boolean;
  defaultOptionLabel?: string;
  enableValidationBorder?: boolean;
}
