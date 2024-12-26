import React from 'react';

type Button = {
  size?: 'lg' | 'md' | 'sm' | 'xs';
  color?:
    | 'green'
    | 'yellow'
    | 'orange'
    | 'skyblue'
    | 'blue'
    | 'lightGray'
    | 'darkGray'
    | 'fadedGreen'
    | 'fadedYellow';
  provider: 'kakao' | 'naver' | 'google';
  disabled?: boolean;
  label: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export type SocialLoginButtonProps = Pick<Button, 'provider' | 'onClick'>;
export type ButtonProps = Omit<Button, 'provider'>;
