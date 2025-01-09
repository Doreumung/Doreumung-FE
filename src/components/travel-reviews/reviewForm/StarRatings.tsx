import Rating from '@mui/material/Rating';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { StarRatingProps } from '../types';
import clsx from 'clsx';

const StarRating = ({ value, onChange }: StarRatingProps) => {
  const getRatingLabel = (rating: number | null): string => {
    return !rating ? '0점' : `${rating}점`;
  };

  return (
    <div className={clsx('flex items-center gap-3', onChange && 'h-11')}>
      <Rating
        value={value}
        precision={0.5}
        max={5}
        size={onChange ? 'large' : 'medium'}
        onChange={(_, newRating) => {
          if (onChange) {
            onChange(newRating || 0);
          }
        }}
        icon={<StarRoundedIcon className="text-logo" fontSize="inherit" />}
        emptyIcon={<StarRoundedIcon className="text-lighterGray" fontSize="inherit" />}
        readOnly={!onChange}
      />
      {onChange && (
        <span className="relative top-px text-darkerGray text-sm">{getRatingLabel(value)}</span>
      )}
    </div>
  );
};

export default StarRating;
