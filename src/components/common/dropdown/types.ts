import { Dispatch, SetStateAction } from 'react';

export type DropdownOption = {
  label: string;
  path?: string;
  action?: string;
};

export type DropdownProps = {
  variant: 'userMenu' | 'travelMenu';
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
