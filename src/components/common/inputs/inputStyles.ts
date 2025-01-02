import { cva } from 'class-variance-authority';

export const inputWrapperStyles = cva('flex flex-col relative text-sm', {
  variants: {
    variant: {
      default: 'gap-1',
      eye: 'gap-1',
      signin: '',
      title: '',
    },
    width: {
      default: 'w-full max-w-96',
      wide: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    width: 'default',
  },
});

export const labelStyles = cva('pl-3', {
  variants: {
    labelColor: {
      logo: 'text-logo',
      darkGray: 'text-darkGray',
    },
  },
  defaultVariants: {
    labelColor: 'logo',
  },
});

export const inputStyles = cva(
  'w-full p-4 border border-green rounded-2xl text-darkerGray focus:outline-green',
  {
    variants: {
      variant: {
        default: 'h-11',
        eye: 'h-11',
        signin: 'h-16 pt-6 pb-2',
        title: 'h-11 border-darkGray bg-fadedGreen placeholder-lightGray focus:outline-darkGray',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const passwordStyle = cva('absolute right-5 bg-white text-lightGray hover:text-darkGray', {
  variants: {
    variant: {
      default: 'top-1/2 -translate-1/2',
      eye: 'bottom-3',
      signin: 'bottom-5',
      title: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
