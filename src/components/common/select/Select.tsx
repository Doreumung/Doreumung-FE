'use client';

import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { SelectDropdown } from './SelectDropdown';

// Select 컴포넌트
const Select = () => {
  const [year, setYear] = useState<number | null>(null); // null로 초기화
  const [month, setMonth] = useState<number | null>(null);
  const [day, setDay] = useState<number | null>(null);

  const generateYears = () => Array.from({ length: 101 }, (_, i) => 2024 - i); // 2024부터 1924까지
  const generateMonths = () => Array.from({ length: 12 }, (_, i) => i + 1);
  const generateDays = (year: number | null, month: number | null) => {
    if (!year || !month) return [];
    const daysInMonth = dayjs(`${year}-${month}`).daysInMonth(); // 연도, 월에 맞는 일수 생성

    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  const years = generateYears();
  const months = generateMonths();
  const days = generateDays(year, month);

  // 날짜 선택 후 콘솔에 날짜 타입으로 반환
  useEffect(() => {
    if (year && month && day) {
      const selectedDate = dayjs(`${year}-${month}-${day}`, 'YYYY-MM-DD');
      console.log('Selected Date:', selectedDate.toDate());
    }
  }, [year, month, day]);

  return (
    <div>
      <p className="px-2 py-1 text-logo text-sm">생년월일</p>
      <div className="flex gap-2">
        {/* 년도 드롭다운 */}
        <SelectDropdown
          options={years}
          selectedValue={year ? `${year}년` : null}
          placeholder="년도"
          onSelect={value => {
            setYear(value);
            setDay(null); // 년도 변경 시 일 초기화
          }}
        />
        {/* 월 드롭다운 */}
        <SelectDropdown
          options={months}
          selectedValue={month ? `${month}월` : null}
          placeholder="월"
          onSelect={value => {
            setMonth(value);
            setDay(null); // 월 변경 시 일 초기화
          }}
        />
        {/* 일 드롭다운 */}
        <SelectDropdown
          options={days}
          selectedValue={day ? `${day}일` : null}
          placeholder="일"
          onSelect={value => setDay(value)}
        />
      </div>
    </div>
  );
};

export default Select;
