import { Dispatch, SetStateAction } from 'react';

export type PaginationProps = {
  totalResults: number;
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  perPage?: number;
};
