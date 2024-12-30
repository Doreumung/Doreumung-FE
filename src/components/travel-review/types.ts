import { Dispatch, SetStateAction } from 'react';

export type StarRatingProps = {
  rating: number | null;
  setRating: Dispatch<SetStateAction<number | null>>;
};

export type RouteInfoProps = {
  label: '일정' | '경로';
  content: string;
};
