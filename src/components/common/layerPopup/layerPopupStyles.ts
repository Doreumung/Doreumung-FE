import { cva } from 'class-variance-authority';

export const layerPopupStyles = cva(
  'flex items-center justify-center rounded-2xl bg-background border border-darkerGray transition-all', // base
  {
    variants: {
      // 특정 속성 값에 따라 추가적으로 적용될 클래스.
      size: {
        md: 'w-96 h-52', // figma
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
