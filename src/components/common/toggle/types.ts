import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { toggleStyles } from './toggleStyles';

export type ToggleItem = string;

export type ToggleProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> &
  Omit<VariantProps<typeof toggleStyles>, 'size' | 'checked'> & {
    label: ToggleItem;
    onChange?: (checked: boolean) => void;
    className?: string;
  };

export type ToggleGroupProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> &
  VariantProps<typeof toggleStyles> & {
    items?: ToggleItem[];
    onChange: (indices: number[]) => void;
    className?: string;
    activeToggles?: number[];
  };
