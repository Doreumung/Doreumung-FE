import { cva } from 'class-variance-authority';

export const navbarStyles = cva('pt-4 text-darkerGray text-lg', {
  variants: {
    variant: {
      default: 'flex gap-10 justify-end',
      hidden: 'hidden',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
