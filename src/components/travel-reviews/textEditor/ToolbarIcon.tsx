import useIsMobile from '@/hooks/useIsMobile';
import clsx from 'clsx';
import { ToolbarIconProps } from '../types';

const ToolbarIcon = ({ icon: ICON, isActive, onClick }: ToolbarIconProps) => {
  const isMobile = useIsMobile();
  return (
    <>
      <ICON
        size={isMobile ? '20' : '23'}
        strokeWidth={isActive ? '2.5' : '1.5'}
        className={clsx(
          isActive ? 'text-logo' : 'text-darkerGray',
          'cursor-pointer hover:text-logo hover:scale-110',
        )}
        onClick={onClick}
      />
    </>
  );
};

export default ToolbarIcon;
