import { cva } from 'class-variance-authority';

export const reviewStatsIconStyles = cva('', {
  variants: {
    color: {
      yellow: 'fill-yellow',
      fadedOrange: 'fill-fadedOrange',
      fadedGreen: 'fill-fadedGreen',
    },
  },
  defaultVariants: {
    color: 'yellow',
  },
});
