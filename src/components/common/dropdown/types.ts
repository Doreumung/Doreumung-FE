import { Dispatch, SetStateAction } from 'react';

export type DropdownOption = {
  label: string;
  path?: string;
  action?: string;
  separator?: boolean;
};

export type DropdownProps = {
  variant: 'userMenu' | 'travelMenu' | 'mobileMenu' | 'mobileUserMenu';
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
