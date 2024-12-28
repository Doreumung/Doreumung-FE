import React from 'react';
import { DropdownOption, DropdownProps } from './types';
import { DROPDOWN_MENUS_TRAVEL, DROPDOWN_MENUS_USER } from './constants';
import { useRouter } from 'next/navigation';

const Dropdown: React.FC<DropdownProps> = ({ variant, setIsOpen }) => {
  const router = useRouter();
  const options = variant === 'userMenu' ? DROPDOWN_MENUS_USER : DROPDOWN_MENUS_TRAVEL;

  const handleSelect = (option: DropdownOption) => {
    if (option.action) {
      switch (option.action) {
        case 'signOut':
          // 로그아웃 로직 구현
          break;
        case 'deleteTravel':
          // 저장 경로 삭제 로직 구현
          break;
        default:
          throw new Error(`Unknown action type: ${option.action}`);
      }
    } else if (option.path) {
      router.push(option.path);
    }

    setIsOpen(false);
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 z-50 w-36 border border-darkerGray bg-background">
      {options.map((option, index) => (
        <div
          key={`${index}-${option.label}`}
          className="h-9 px-4 py-2 text-base text-darkerGray cursor-pointer hover:bg-fadedOrange"
          onClick={() => handleSelect(option)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
