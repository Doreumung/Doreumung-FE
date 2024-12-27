import { cva } from 'class-variance-authority';

export const layerPopupStyles = cva(
  'flex justify-center items-center border border-darkerGray rounded-2xl bg-background transition-all',
  {
    variants: {
      size: {
        md: 'w-96 h-52',
      },
      visible: {
        true: 'opacity-100 pointer-events-auto',
        false: 'opacity-0 pointer-events-none',
      },
    },
    defaultVariants: {
      size: 'md',
      visible: false,
    },
  },
);
