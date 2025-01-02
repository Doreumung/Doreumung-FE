import { RefObject } from 'react';

export type UseOutsideClickProps = {
  ref: RefObject<HTMLElement | null>;
  callback: () => void;
};

export type Level = 1 | 2 | 3;

export type ToolbarGroups = 'heading' | 'color' | 'style';
