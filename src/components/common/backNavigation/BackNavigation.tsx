import { ChevronLeft } from 'lucide-react';
import { BACK_NAVIGATION_PATHS } from './constants';
import Link from 'next/link';
import { BackNavigationProps } from './types';

const BackNavigation = ({ to, reviewId, onNavigate }: BackNavigationProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const path = BACK_NAVIGATION_PATHS[to].path || `/travel-reviews/detail/${reviewId}`;
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div className="flex w-full">
      <Link
        href={BACK_NAVIGATION_PATHS[to].path || `/travel-reviews/detail/${reviewId}`}
        className="flex items-center text-darkGray"
        onClick={onNavigate ? handleClick : undefined}
      >
        <ChevronLeft size={20} />
        <span>{BACK_NAVIGATION_PATHS[to].label}</span>
      </Link>
    </div>
  );
};

export default BackNavigation;
