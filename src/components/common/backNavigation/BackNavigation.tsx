import { ChevronLeft } from 'lucide-react';
import { BACK_NAVIGATION_PATHS } from './constants';
import Link from 'next/link';
import { BackNavigationProps } from './types';

const BackNavigation = ({ to }: BackNavigationProps) => {
  return (
    <div className="flex w-full">
      <Link href={BACK_NAVIGATION_PATHS[to].path} className="flex items-center text-darkGray">
        <ChevronLeft size={20} />
        <span>{BACK_NAVIGATION_PATHS[to].label}</span>
      </Link>
    </div>
  );
};

export default BackNavigation;
