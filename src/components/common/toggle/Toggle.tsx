'use client';

import { useState } from 'react';
import { toggleStyles } from './toggleStyles';
import { ToggleProps } from './types';
import { twMerge } from 'tailwind-merge';

const Toggle = ({
  label,
  size = 'md',
  defaultChecked = false,
  disabled = false,
  className,
  onChange,
}: ToggleProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const updatedCheckedState = !checked;
    setChecked(updatedCheckedState);
    if (onChange) {
      onChange(updatedCheckedState);
    }
  };

  return (
    <button
      className={twMerge(toggleStyles({ size, checked, disabled }), className)}
      disabled={disabled}
      onClick={handleToggle}
    >
      {label}
    </button>
  );
};

export default Toggle;
