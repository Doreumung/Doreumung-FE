import { VariantProps } from 'class-variance-authority';
import { inputWrapperStyles } from './inputStyles';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputWrapperStyles> & {
    id: string;
    label?: string;
    placeholder?: string;
    error?: string;
  };
