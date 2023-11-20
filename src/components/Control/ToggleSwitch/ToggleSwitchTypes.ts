export interface ToggleSwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  labelProps?: Omit<React.HTMLAttributes<HTMLLabelElement>, 'id'>;
}
