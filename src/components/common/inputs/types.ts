import { VariantProps } from 'class-variance-authority';
import { inputStyles } from './inputStyles';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputStyles> & {
    id: string;
    label?: string;
    unit?: string;
    placeholder?: string;
    error?: string;
  };
