'use client';

import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './types';
import { buttonStyles } from './buttonStyles';

const Button = ({ size, color, disabled = false, label, className, onClick }: ButtonProps) => {
  return (
    <button
      className={twMerge(buttonStyles({ size, color, disabled }), className)}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
