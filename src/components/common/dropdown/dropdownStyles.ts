import { cva } from 'class-variance-authority';

export const dropdownStyles = cva('absolute z-50 w-36 border border-darkerGray bg-background', {
  variants: {
    variant: {
      default: 'left-1/2 -translate-x-1/2',
      mobile: 'right-0',
    },
  },
});
