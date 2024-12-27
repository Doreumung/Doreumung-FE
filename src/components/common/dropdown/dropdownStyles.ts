import { cva } from 'class-variance-authority';

export const dropdownStyles = cva('absolute mt-2 w-36 z-50 border border-darkerGray bg-whitish', {
  variants: {
    variant: {
      navbar: '',
      edit: '',
    },
  },
  defaultVariants: {
    variant: 'navbar',
  },
});

export const menuItemStyles = cva(
  'px-4 py-2 text-sm text-darkerGray h-9 hover:bg-fadedOrange cursor-pointer',
  {
    variants: {
      variant: {
        navbar: '',
        edit: '',
      },
    },
    defaultVariants: {
      variant: 'navbar',
    },
  },
);
