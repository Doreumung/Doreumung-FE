'use client';

import clsx from 'clsx';
import React, { useState, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { inputStyles, inputWrapperStyles, passwordStyle } from './inputStyles';
import { InputProps } from './types';
import { Eye, EyeOff } from 'lucide-react';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, type, placeholder, error, variant, width, className, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const isPasswordInput = type === 'password';
    const inputType = isPasswordInput && isPasswordVisible ? 'text' : type;

    return (
      <div className={clsx(inputWrapperStyles({ variant, width }))}>
        {label && (
          <label
            htmlFor={id}
            className={clsx('pl-3 text-logo ', variant === 'signin' && 'absolute top-1')}
          >
            {label}
          </label>
        )}
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          className={twMerge(clsx(inputStyles({ variant }), isPasswordInput && 'pr-12'), className)}
          ref={ref}
          {...props}
        />
        {isPasswordInput && (
          <button
            type="button"
            className={clsx(passwordStyle({ variant }))}
            onClick={() => setIsPasswordVisible(prev => !prev)}
          >
            {isPasswordVisible ? <EyeOff className=" h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
        {error && <p className="text-sm text-logo">{error}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
