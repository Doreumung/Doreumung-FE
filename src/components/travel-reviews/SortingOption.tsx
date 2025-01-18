import clsx from 'clsx';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { SortCriteria, SortingOptionProps } from './types';
import { LABELS_BY_SORTING_OPTIONS } from './constants';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { setOrderBy, setSortState } from '@/store/sortSlice';

const SortingOption = ({ option }: SortingOptionProps) => {
  const dispatch = useAppDispatch();
  const { sortState, orderBy } = useAppSelector((state: RootState) => state.sort);

  const handleSorting = (criteria: SortCriteria) => {
    if (criteria === orderBy)
      dispatch(
        setSortState({
          ...sortState,
          [criteria]: sortState[criteria] === 'desc' ? 'asc' : 'desc',
        }),
      );
    else dispatch(setSortState({ ...sortState }));

    dispatch(setOrderBy(criteria));
  };

  return (
    <button
      className={twMerge(
        clsx(
          'flex items-center gap-2 min-w-16 px-2 border border-darkerGray rounded-md bg-lighterGray text-darkGray hover:bg-green',
          orderBy === option && 'bg-fadedGreen text-foreground',
        ),
      )}
      onClick={() => handleSorting(option)}
    >
      {LABELS_BY_SORTING_OPTIONS[option]}
      {sortState[option] === 'desc' ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
    </button>
  );
};

export default SortingOption;
