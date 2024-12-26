import { cva } from 'class-variance-authority';

export const inputWrapperStyles = cva('flex flex-col text-sm w-96', {
  variants: {
    variant: {
      default: 'gap-1',
      signin: '',
      title: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const inputStyles = cva(
  'w-full p-4 text-darkerGray border border-green rounded-2xl focus:outline-green',
  {
    variants: {
      variant: {
        default: 'h-11',
        signin: 'pt-6 pb-2 h-16',
        title:
          'h-11 bg-fadedGreen text-darkerGray placeholder-lightGray border-darkGray focus:outline-darkGray',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
