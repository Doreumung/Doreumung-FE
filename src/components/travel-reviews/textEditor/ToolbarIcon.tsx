import useIsMobile from '@/hooks/useIsMobile';
import clsx from 'clsx';
import { ToolbarIconProps } from '../types';
import { twMerge } from 'tailwind-merge';

const ToolbarIcon = ({ icon: ICON, isActive, onClick, className, ariaLabel }: ToolbarIconProps) => {
  const isMobile = useIsMobile();
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel || '툴바 아이콘'}
      aria-pressed={isActive}
    >
      <ICON
        width={isMobile ? 20 : 23}
        height={isMobile ? 20 : 23}
        strokeWidth={isActive ? '2.5' : '1.5'}
        className={twMerge(
          clsx(
            isActive ? 'text-logo' : 'text-darkerGray',
            'cursor-pointer hover:text-logo hover:scale-110',
          ),
        )}
        aria-hidden="true"
        focusable="false"
      />
    </button>
  );
};

export default ToolbarIcon;
