'use client';

import { useEffect, useRef, useState } from 'react';
import { SelectDropdownProps } from './types';
import clsx from 'clsx';

// SelectDropdown 컴포넌트
export const SelectDropdown = <T extends number>({
  options, // 옵션 배열
  selectedValue, // 현재 선택된 값 표시
  placeholder,
  onSelect, // 선택 시 실행할 함수
}: SelectDropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // 드롭다운을 감지하기 위한 ref

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // Node는 DOM 트리의 모든 요소를 포함하므로 Node로 타입 단언
        // 클릭한 요소가 드롭다운 내부인지 확인
        setIsOpen(false); // 외부 클릭 시 드롭다운 닫기
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // 클릭 이벤트 등록
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // 클릭 이벤트 제거
    };
  }, []);

  const handleOptionClick = (value: T) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-1/3" ref={dropdownRef}>
      {/* 드롭다운에 ref 연결 */}
      <div
        className={clsx(
          'flex justify-between items-center border border-green rounded-2xl px-3 py-2 h-11',
          options.length > 0 ? 'bg-white' : 'bg-lighterGray',
        )}
        onClick={() => {
          if (options.length > 0) {
            setIsOpen(prev => !prev);
          }
        }}
      >
        <span className="text-darkGray text-sm">{selectedValue ? selectedValue : placeholder}</span>
        {/* 화살표 모양 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-4 h-4 transition-transform ${
            isOpen && options.length > 0 ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && options.length > 0 && (
        <ul className="absolute z-10 overflow-y-scroll w-full h-48 pl-0 border border-green bg-white scrollbar-hide">
          {options.map(option => (
            <li
              key={option}
              className="flex justify-start pl-4 py-2 w-full text-darkGray text-sm hover:bg-fadedOrange list-none"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
