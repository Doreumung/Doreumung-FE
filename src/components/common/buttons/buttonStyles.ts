import { cva } from 'class-variance-authority';

export const buttonStyles = cva('border border-darkerGray rounded-2xl hover:brightness-105', {
  variants: {
    size: {
      lg: 'w-80 h-16 text-2xl',
      md: 'w-36 h-14 text-xl',
      sm: 'w-24 h-10 text-base md:text-lg',
      xs: 'w-20 h-8 text-base',
    },
    color: {
      green: 'bg-green text-foreground',
      yellow: 'bg-yellow text-foreground',
      orange: 'bg-logo text-foreground',
      skyblue: 'bg-skyblue text-foreground',
      blue: 'bg-blue text-background',
      fadedGreen: 'bg-fadedGreen text-foreground',
      fadedYellow: 'bg-fadedYellow text-foreground',
      lighterGray: 'bg-lighterGray text-foreground',
      darkerGray: 'bg-darkerGray text-background',
    },
    shadow: {
      dropShadow:
        'drop-shadow-button active:translate-x-px active:translate-y-px active:drop-shadow-clickedButton',
      none: '',
    },
    disabled: {
      true: 'brightness-90 text-darkGray hover:brightness-90',
      false: '',
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'green',
    shadow: 'none',
    disabled: false,
  },
});

export const socialLoginButtonStyles = cva(
  'flex gap-2 justify-center items-center rounded-2xl w-96 h-11',
  {
    variants: {
      provider: {
        kakao: 'bg-kakaoContainer text-kakaoLabel',
        google: 'bg-googleContainer text-googleLabel',
      },
    },
  },
);
