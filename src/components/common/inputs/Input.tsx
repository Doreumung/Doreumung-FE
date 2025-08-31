'use client';

import clsx from 'clsx';
import React, { useState, forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { inputStyles, inputWrapperStyles, labelStyles, passwordStyle } from './inputStyles';
import { InputProps } from './types';
import { Eye, EyeOff } from 'lucide-react';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, label, type, placeholder, error, variant, width, labelColor, className, ...props },
    ref,
  ) => {
    const uid = useId();
    const inputId = id ?? uid;
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const isPasswordInput = type === 'password';
    const inputType = isPasswordInput && isPasswordVisible ? 'text' : type;

    return (
      <div className={clsx(inputWrapperStyles({ variant, width }))}>
        {label && (
          <label
            htmlFor={inputId}
            className={clsx(
              labelStyles({ labelColor: labelColor === 'darkerGray' ? 'darkerGray' : labelColor }),
              variant === 'signin' && 'absolute top-1',
            )}
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={inputType}
          placeholder={placeholder}
          className={twMerge(clsx(inputStyles({ variant }), isPasswordInput && 'pr-12'), className)}
          ref={ref}
          aria-invalid={!!error || undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {isPasswordInput && (
          <button
            aria-label={isPasswordVisible ? '비밀번호 숨기기' : '비밀번호 보이기'}
            aria-pressed={isPasswordVisible}
            type="button"
            className={clsx(passwordStyle({ variant }))}
            onClick={() => setIsPasswordVisible(prev => !prev)}
          >
            {isPasswordVisible ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
          </button>
        )}
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-logo">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
