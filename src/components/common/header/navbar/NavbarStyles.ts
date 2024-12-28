import { cva } from 'class-variance-authority';

export const navbarStyles = cva('absolute top-0 right-0 z-10 pr-8 pt-4 text-darkerGray text-lg', {
  variants: {
    variant: {
      default: 'flex justify-end gap-10',
      hidden: 'hidden',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
