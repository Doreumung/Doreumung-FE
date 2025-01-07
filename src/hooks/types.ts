import { RefObject } from 'react';

export type UseOutsideClickProps = {
  ref: RefObject<HTMLElement | null>;
  callback: () => void;
};

export type Level = 1 | 2 | 3;

export type ToolbarGroups = 'heading' | 'color' | 'style' | 'list';

export type UseBeforeUnloadOption = {
  message?: string;
};

export type UseNavigationPopupReturn = {
  showNavigationPopup: boolean;
  navigationPath: string;
  handleNavigation: (path: string) => void;
  handleNavigationConfirm: () => void;
  handleNavigationCancel: () => void;
};
