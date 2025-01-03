import useIsMobile from '@/hooks/useIsMobile';
import clsx from 'clsx';
import { ToolbarIconProps } from '../types';
import { twMerge } from 'tailwind-merge';

const ToolbarIcon = ({ icon: ICON, isActive, onClick, className }: ToolbarIconProps) => {
  const isMobile = useIsMobile();
  return (
    <div className={className}>
      <ICON
        size={isMobile ? '20' : '23'}
        strokeWidth={isActive ? '2.5' : '1.5'}
        className={twMerge(
          clsx(
            isActive ? 'text-logo' : 'text-darkerGray',
            'cursor-pointer hover:text-logo hover:scale-110',
          ),
        )}
        onClick={onClick}
      />
    </div>
  );
};

export default ToolbarIcon;
