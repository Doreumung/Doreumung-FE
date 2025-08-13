import { twMerge } from 'tailwind-merge';
import { ReviewStatsProps } from '../types';
import { reviewStatsIconStyles } from './ReviewStatsStyles';

const ReviewStats = ({ stats, color, icon: Icon, className, ariaLabel }: ReviewStatsProps) => {
  const hideChildren = Boolean(ariaLabel);
  return (
    <div aria-label={ariaLabel} className={twMerge('flex items-center gap-1 text-sm', className)}>
      <Icon
        size={17}
        aria-hidden={hideChildren || undefined}
        className={reviewStatsIconStyles({ color })}
      />
      <span aria-hidden={hideChildren || undefined}>{stats}</span>
    </div>
  );
};

export default ReviewStats;
