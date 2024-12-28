import { cva } from 'class-variance-authority';

export const logoContainerStyles = cva('w-fit', {
  variants: {
    variant: {
      home: 'inline-block relative pl-20',
      common: 'flex items-center',
      none: 'hidden',
    },
  },
  defaultVariants: {
    variant: 'common',
  },
});

export const logoStyles = cva('', {
  variants: {
    variant: {
      home: 'relative top-10',
      common: 'w-32',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'common',
  },
});

export const dolmungStyles = cva('', {
  variants: {
    variant: {
      home: 'absolute top-2 -right-11 w-14',
      common: 'relative -left-1 w-12',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'common',
  },
});
