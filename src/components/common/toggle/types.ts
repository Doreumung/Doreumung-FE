import React from 'react';

export interface ToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  label: string;
  size?: 'md' | 'sm';
  defaultChecked?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
}
