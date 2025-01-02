import { ChevronLeft } from 'lucide-react';
import { BACK_NAVIGATION_PATHS } from './constants';
import Link from 'next/link';
import { BackNavigationProps } from './types';

const BackNavigation = ({ to }: BackNavigationProps) => {
  return (
    <Link href={BACK_NAVIGATION_PATHS[to].path} className="flex items-center w-full text-darkGray">
      <ChevronLeft size={20} />
      <span>{BACK_NAVIGATION_PATHS[to].label}</span>
    </Link>
  );
};

export default BackNavigation;
