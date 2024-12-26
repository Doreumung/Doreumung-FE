'use client';

import { SocialLoginButtonProps } from './types';
import Image from 'next/image';
import { SocialLoginLabels, SocialLogos } from './constants';
import { socialLoginButtonStyles } from './buttonStyles';

const SocialLoginButton = ({ provider, onClick }: SocialLoginButtonProps) => {
  return (
    <button className={socialLoginButtonStyles({ provider })} onClick={onClick}>
      <Image src={SocialLogos[provider]} alt={provider} />
      {SocialLoginLabels[provider]}
    </button>
  );
};

export default SocialLoginButton;
