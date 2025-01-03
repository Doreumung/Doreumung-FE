import { useMemo } from 'react';
import {
  DISABLED_PAGE_BUTTON_STYLES,
  PAGE_BUTTON_STYLES,
  PAGE_GROUP_SIZE,
  PER_PAGE,
} from './constants';
import clsx from 'clsx';
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react';
import { PaginationProps } from './types';

const Pagination = ({ totalResults, currentPage, setPage }: PaginationProps) => {
  const totalPages = useMemo(() => Math.ceil(totalResults / PER_PAGE), [totalResults]);
  const pageGroup = Math.ceil(currentPage / PAGE_GROUP_SIZE);
  const isSinglePageGroup = PER_PAGE * PAGE_GROUP_SIZE >= totalResults;

  const firstPageOfGroup = useMemo(() => (pageGroup - 1) * PAGE_GROUP_SIZE + 1, [pageGroup]);

  const pages = useMemo(
    () =>
      Array.from({ length: PAGE_GROUP_SIZE }, () => firstPageOfGroup) //
        .map((num, index) => num + index),
    [firstPageOfGroup],
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    else if (
      (page === 1 && currentPage === 1) ||
      (page === totalPages && currentPage === totalPages)
    )
      return;
    setPage(page);
  };

  return (
    <div
      className={clsx(
        'flex gap-5 px-5 py-1 border border-darkerGray rounded-md bg-white text-darkGray',
        totalPages === 1 && 'hidden',
      )}
    >
      {!isSinglePageGroup && (
        <>
          <ChevronFirst
            className={clsx(PAGE_BUTTON_STYLES, currentPage === 1 && DISABLED_PAGE_BUTTON_STYLES)}
            onClick={() => handlePageChange(1)}
          />
          <ChevronLeft
            className={clsx(PAGE_BUTTON_STYLES, currentPage === 1 && DISABLED_PAGE_BUTTON_STYLES)}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </>
      )}
      {pages.map(page => (
        <span
          key={page}
          className={clsx(
            PAGE_BUTTON_STYLES,
            currentPage === page && 'text-logo',
            page > totalPages && 'hidden',
          )}
          onClick={() => setPage(page)}
        >
          {page}
        </span>
      ))}
      {!isSinglePageGroup && (
        <>
          <ChevronRight
            className={clsx(
              PAGE_BUTTON_STYLES,
              totalPages === currentPage && DISABLED_PAGE_BUTTON_STYLES,
            )}
            onClick={() => handlePageChange(currentPage + 1)}
          />
          <ChevronLast
            className={clsx(
              PAGE_BUTTON_STYLES,
              totalPages === currentPage && DISABLED_PAGE_BUTTON_STYLES,
            )}
            onClick={() => handlePageChange(totalPages)}
          />
        </>
      )}
    </div>
  );
};

export default Pagination;
