import { cva } from 'class-variance-authority';

export const headerStyles = cva('pt-2 px-8', {
  variants: {
    variant: {
      home: 'h-40',
      common: 'h-20',
      none: 'hidden',
    },
  },
  defaultVariants: {
    variant: 'common',
  },
});
