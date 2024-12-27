'use client';

import { useState } from 'react';
import { toggleStyles } from './toggleStyles';
import { ToggleProps } from './types';

// 일정 생성 후 다시 뽑기 시 경로 고정할 때 쓰이는 단일 Toggle 버튼
// onChange는 Toggle 호출한 컴포넌트 내에서 정의된 함수로, 해당 경로의 고정 여부를 전달
const Toggle = ({ label, disabled = false, onChange }: ToggleProps) => {
  const [checked, setChecked] = useState(true);

  const handleToggle = () => {
    const updatedCheckedState = !checked;
    setChecked(updatedCheckedState);
    if (onChange) {
      onChange(updatedCheckedState);
    }
  };

  return (
    <button
      className={toggleStyles({ size: 'sm', checked, disabled })}
      disabled={disabled}
      onClick={handleToggle}
    >
      {label}
    </button>
  );
};

export default Toggle;
