import { VariantProps } from 'class-variance-authority';
import { dropdownStyles } from './dropdownStyles';

export type DropdownOption = {
  label: string;
  action?: () => void;
};

export type DropdownProps = VariantProps<typeof dropdownStyles> & {
  options: DropdownOption[];
};
