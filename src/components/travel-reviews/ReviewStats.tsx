import { twMerge } from 'tailwind-merge';
import { ReviewStatsProps } from './types';
import { reviewStatsIconStyles } from './ReviewStatsStyles';

const ReviewStats = ({ stats, color, icon: Icon, className }: ReviewStatsProps) => {
  return (
    <>
      <div className={twMerge('flex items-center gap-1 text-sm', className)}>
        <Icon size={17} className={reviewStatsIconStyles({ color })} />
        <span>{stats}</span>
      </div>
    </>
  );
};

export default ReviewStats;
