import { cva } from 'class-variance-authority';

export const routeInfoContainerStyles = cva('flex flex-col gap-1', {
  variants: {
    variant: {
      reviewCreate: 'items-start text-darkerGray md:flex-row md:items-center md:gap-4',
      reviewDetail: 'sm:flex-row sm:items-center sm:gap-4',
    },
  },
  defaultVariants: {
    variant: 'reviewCreate',
  },
});

export const routeInfoLabelStyles = cva('shrink-0', {
  variants: {
    variant: {
      reviewCreate: 'pl-2 md:pl-0',
      reviewDetail: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'reviewCreate',
  },
});

export const routeInfoContentStyles = cva('text-darkerGray leading-7', {
  variants: {
    variant: {
      reviewCreate:
        'flex justify-center items-center min-h-11 px-4 py-2 border border-green rounded-2xl bg-fadedGreen text-center',
      reviewDetail: 'text-base',
    },
  },
  defaultVariants: {
    variant: 'reviewCreate',
  },
});
