import React from 'react';
import { DropdownOption, DropdownProps } from './types';
import { DROPDOWN_MENU } from './constants';
import { useRouter } from 'next/navigation';
import { dropdownStyles } from './dropdownStyles';
import useIsMobile from '@/hooks/useIsMobile';

const Dropdown: React.FC<DropdownProps> = ({ variant, setIsOpen }) => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const options: DropdownOption[] = DROPDOWN_MENU[variant];

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
    <div className={dropdownStyles({ variant: isMobile ? 'mobile' : 'default' })}>
      {options.map((option, index) => (
        <div key={`${index}-${option.label}`}>
          <div
            className="h-9 px-4 py-2 text-base text-darkerGray cursor-pointer hover:bg-fadedOrange"
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </div>
          {isMobile && option.separator && <hr className="border-px border-darkGray" />}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
