import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { dropdownStyles, menuItemStyles } from './dropdownStyles';
import { DropdownOption, DropdownProps } from './types';
import { LucideEllipsisVertical } from 'lucide-react';

const username = '돌멍';

const Dropdown: React.FC<DropdownProps> = ({ variant, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: DropdownOption) => {
    setIsOpen(false);
    if (option.action) {
      option.action();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button className="px-2 py-2 text-sm" onClick={() => setIsOpen(prev => !prev)}>
        {variant === 'navbar' ? `${username}님 혼저옵서예!` : <LucideEllipsisVertical />}
      </button>

      {isOpen && (
        <div className={twMerge(clsx(dropdownStyles({ variant })))}>
          {options.map(option => (
            <div
              key={option.label}
              className={twMerge(
                clsx(
                  menuItemStyles({
                    variant,
                  }),
                ),
              )}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
