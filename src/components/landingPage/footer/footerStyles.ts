import { cva } from 'class-variance-authority';

export const footerStyles = cva(
  'relative w-full h-96 px-4 py-8 mt-10 border-t border-green overflow-hidden md:h-72',
  {
    variants: {
      display: {
        block: 'flex justify-center items-center',
        hidden: 'hidden',
      },
      isLandingPage: {
        true: 'bg-background',
        false: 'bg-fadedSkyblue',
      },
    },
  },
);
