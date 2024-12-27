// SelectDropdown Props 타입 정의
export type SelectDropdownProps<T> = {
  options: T[];
  selectedValue: T | string | null;
  placeholder: string;
  onSelect: (value: T) => void;
};
