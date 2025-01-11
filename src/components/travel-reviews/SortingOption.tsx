import clsx from 'clsx';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { SortCriteria, SortingOptionProps } from './types';
import { LABELS_BY_SORTING_OPTIONS } from './constants';

const SortingOption = ({
  orderBy,
  setOrderBy,
  sortingOptions,
  setSortingOptions,
  option,
}: SortingOptionProps) => {
  const handleSorting = (criteria: SortCriteria) => {
    setSortingOptions(prev => {
      if (criteria === orderBy)
        return { ...prev, [criteria]: prev[criteria] === 'desc' ? 'asc' : 'desc' };
      else return { ...prev };
    });
    setOrderBy(criteria);
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
      {sortingOptions[option] === 'desc' ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
    </button>
  );
};

export default SortingOption;
