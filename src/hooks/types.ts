import { RefObject } from 'react';

export type UseOutsideClickProps = {
  ref: RefObject<HTMLElement | null>;
  callback: () => void;
};
