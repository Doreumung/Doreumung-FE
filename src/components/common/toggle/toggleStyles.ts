import { cva } from 'class-variance-authority';

export const toggleStyles = cva(['rounded-2xl', 'border border-darkerGray'], {
  variants: {
    size: {
      md: ['text-xl', 'h-10', 'min-w-24', 'px-5'],
      sm: ['text-base', 'h-9', 'w-20'],
    },
    checked: {
      true: ['bg-fadedSkyblue', 'text-darkerGray'],
      false: ['bg-lighterGray', 'text-lightGray'],
    },
    disabled: {
      true: ['!bg-darkerGray', '!text-lighterGray'],
      false: [],
    },
  },
  defaultVariants: {
    size: 'md',
    checked: false,
    disabled: false,
  },
});
