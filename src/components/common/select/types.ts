// SelectDropdown Props 타입 정의
export type SelectDropdownProps<T> = {
  options: T[];
  selectedValue: T | string | null;
  placeholder: string;
  onSelect: (value: T) => void;
};

// setSelectedDate Props 타입 정의
// 부모 컴포넌트로 값 올려주기
export type SelectProps = {
  setSelectedDate: (date: string | null) => void; // 부모 컴포넌트에서 날짜를 설정하는 함수
  optional?: boolean;
  defaultDate?: string;
};
