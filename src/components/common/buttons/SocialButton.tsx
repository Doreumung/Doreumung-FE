'use client';

import { cva } from 'class-variance-authority';
import { SocialButtonProps } from './type';
import Image from 'next/image';
import { SocialLoginLabels, SocialLogos } from './constants';

const SocialButton = ({ social, onClick }: SocialButtonProps) => {
  const socialButton = cva(
    [
      'rounded-2xl',
      'border border-foreground',
      'flex items-center justify-center gap-2',
      'w-96 h-11',
    ],
    {
      variants: {
        social: {
          kakao: ['bg-kakaoContainer', 'text-kakaoLabel'],
          naver: ['bg-naverContainer', 'text-naverLabel'],
          google: ['bg-googleContainer', 'text-googleLabel'],
          none: [],
        },
      },
      defaultVariants: {
        social: 'none',
      },
    },
  );
  return (
    <button className={socialButton({ social })} onClick={onClick}>
      <Image src={SocialLogos[social]} alt={social} />
      {SocialLoginLabels[social]}
    </button>
  );
};

export default SocialButton;
