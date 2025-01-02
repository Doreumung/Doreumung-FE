import { twMerge } from 'tailwind-merge';
import { ReviewStatsProps } from './types';

const ReviewStats = ({ stats, color, icon: Icon, className }: ReviewStatsProps) => {
  const fillColor = `fill-${color}`;
  return (
    <>
      <div className={twMerge('flex items-center gap-1 text-sm', className)}>
        <Icon size={17} className={fillColor} />
        <span>{stats}</span>
      </div>
    </>
  );
};

export default ReviewStats;
