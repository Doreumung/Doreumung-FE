import { cva } from 'class-variance-authority';

export const toastStyles = cva(
  'flex justify-start items-center relative h-28 p-4 border-2 rounded-2xl bg-white transition-all ease-in-out duration-300',
  {
    variants: {
      type: {
        success: 'border-green text-darkerGray',
        error: 'border-red text-red',
      },
    },
  },
);
