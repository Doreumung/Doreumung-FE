import { cva } from 'class-variance-authority';

export const toggleStyles = cva(['rounded-2xl', 'border border-darkerGray'], {
  variants: {
    size: {
      md: ['text-xl', 'h-10', 'w-24'],
      sm: ['text-base', 'h-9', 'w-20'],
    },
    checked: {
      true: ['bg-fadedSkyblue', 'text-darkerGray'],
      false: ['bg-lighterGray', 'text-lightGray'],
    },
    disabled: {
      true: ['bg-darkerGray', 'text-lighterGray'],
      false: [],
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      checked: true,
      class: ['bg-yellow'],
    },
  ],
  defaultVariants: {
    size: 'md',
    checked: false,
    disabled: false,
  },
});
