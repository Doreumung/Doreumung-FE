import { cva } from 'class-variance-authority';

export const headingToolStyles = cva('flex items-center', {
  variants: {
    isMobile: {
      true: 'gap-0 absolute top-8 border border-darkerGray rounded-md bg-white drop-shadow-md',
      false: 'gap-2',
    },
  },
  defaultVariants: {
    isMobile: false,
  },
});
