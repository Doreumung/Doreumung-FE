import Rating from '@mui/material/Rating';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { StarRatingProps } from '../types';

const StarRating = ({ value, onChange }: StarRatingProps) => {
  const getRatingLabel = (rating: number | null): string => {
    return !rating ? '0점' : `${rating}점`;
  };

  return (
    <div className="h-11 flex items-center gap-3">
      <Rating
        value={value}
        precision={0.5}
        max={5}
        size="large"
        onChange={(_, newRating) => {
          onChange(newRating || 0);
        }}
        icon={<StarRoundedIcon className="text-logo" fontSize="inherit" />}
        emptyIcon={<StarRoundedIcon className="text-lighterGray" fontSize="inherit" />}
      />
      <span className="relative top-px text-darkerGray text-sm">{getRatingLabel(value)}</span>
    </div>
  );
};

export default StarRating;
