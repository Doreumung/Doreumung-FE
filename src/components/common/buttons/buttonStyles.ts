import { cva } from 'class-variance-authority';

export const buttonStyles = cva('border border-foreground rounded-2xl', {
  variants: {
    size: {
      lg: 'w-80 h-16 drop-shadow-button text-2xl ',
      md: 'w-36 h-14 drop-shadow-button text-xl ',
      sm: 'w-24 h-10 text-lg',
      xs: '*:w-20 h-8 text-base',
    },
    color: {
      green: 'bg-green text-foreground',
      yellow: 'bg-yellow text-foreground',
      orange: 'bg-logo text-foreground',
      skyblue: 'bg-skyblue text-foreground',
      blue: 'bg-blue text-background',
      fadedGreen: 'bg-fadedGreen text-foreground',
      fadedYellow: 'bg-fadedYellow text-foreground',
      lightGray: 'bg-lighterGray text-background',
      darkGray: 'bg-darkerGray text-background',
    },
    disabled: {
      true: 'brightness-75 text-darkGray',
      false: '',
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'green',
    disabled: false,
  },
});

export const socialLoginButtonStyles = cva(
  'flex gap-2 justify-center items-center border border-foreground rounded-2xl w-96 h-11',
  {
    variants: {
      provider: {
        kakao: 'bg-kakaoContainer text-kakaoLabel',
        naver: 'bg-naverContainer text-naverLabel',
        google: 'bg-googleContainer text-googleLabel',
      },
    },
  },
);
