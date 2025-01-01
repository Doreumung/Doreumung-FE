import { cva } from 'class-variance-authority';

export const toggleStyles = cva('rounded-2xl border border-darkerGray', {
  variants: {
    size: {
      md: 'min-w-20 h-10 px-3 text-base md:min-w-24 md:px-5 md:text-xl',
      sm: 'w-20 h-9 text-base',
    },
    checked: {
      true: 'bg-fadedSkyblue text-darkerGray',
      false: 'bg-lighterGray text-lightGray hover:bg-fadedSkyblue',
    },
    disabled: {
      true: '!bg-darkerGray !text-lighterGray',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    checked: false,
    disabled: false,
  },
});
