import { cva } from 'class-variance-authority';

export const buttonStyles = cva(['rounded-2xl', 'border border-foreground'], {
  variants: {
    size: {
      lg: ['text-2xl', 'h-16', 'w-80', 'drop-shadow-button'],
      md: ['text-xl', 'h-14', 'w-36', 'drop-shadow-button'],
      sm: ['text-lg', 'h-10', 'w-24'],
      xs: ['text-base', 'h-8', 'w-20'],
    },
    color: {
      green: ['bg-green', 'text-foreground'],
      yellow: ['bg-yellow', 'text-foreground'],
      orange: ['bg-logo', 'text-foreground'],
      skyblue: ['bg-skyblue', 'text-foreground'],
      blue: ['bg-blue', 'text-background'],
      fadedGreen: ['bg-fadedGreen', 'text-foreground'],
      fadedYellow: ['bg-fadedYellow', 'text-foreground'],
      lightGray: ['bg-lighterGray', 'text-background'],
      darkGray: ['bg-darkerGray', 'text-background'],
    },
    disabled: {
      true: ['brightness-75', 'text-darkGray'],
      false: [],
    },
  },
  defaultVariants: {
    size: 'sm',
    color: 'green',
    disabled: false,
  },
});

export const socialLoginButtonStyles = cva(
  [
    'rounded-2xl',
    'border border-foreground',
    'flex items-center justify-center gap-2',
    'w-96 h-11',
  ],
  {
    variants: {
      provider: {
        kakao: ['bg-kakaoContainer', 'text-kakaoLabel'],
        naver: ['bg-naverContainer', 'text-naverLabel'],
        google: ['bg-googleContainer', 'text-googleLabel'],
      },
    },
  },
);
