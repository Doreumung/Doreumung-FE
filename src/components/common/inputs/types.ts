import { VariantProps } from 'class-variance-authority';
import { inputStyles } from './inputStyles';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputStyles> & {
    id: string;
    label?: string;
    placeholder?: string;
    error?: string;
  };
