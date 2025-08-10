import { useMemo } from 'react';
import { PAGE_GROUP_SIZE, DISABLED_PAGE_BUTTON_STYLES, PAGE_BUTTON_STYLES } from './constants';
import clsx from 'clsx';
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react';
import { PaginationProps } from './types';
import { twMerge } from 'tailwind-merge';

const Pagination = ({ totalResults, currentPage, setPage, perPage = 9 }: PaginationProps) => {
  const pageGroup = Math.ceil(currentPage / PAGE_GROUP_SIZE);

  const totalPages = useMemo(() => Math.ceil(totalResults / perPage), [totalResults, perPage]);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(page);
  };

  return (
    <div className="flex gap-5 px-5 py-1 border border-darkerGray rounded-md bg-white text-darkGray">
      <button aria-label="첫 페이지" onClick={() => handlePageChange(1)}>
        <ChevronFirst
          aria-hidden="true"
          className={twMerge(
            clsx(PAGE_BUTTON_STYLES, currentPage === 1 && DISABLED_PAGE_BUTTON_STYLES),
          )}
        />
      </button>
      <button aria-label="이전 페이지" onClick={() => handlePageChange(currentPage - 1)}>
        <ChevronLeft
          aria-hidden="true"
          className={twMerge(
            clsx(PAGE_BUTTON_STYLES, currentPage === 1 && DISABLED_PAGE_BUTTON_STYLES),
          )}
        />
      </button>

      {pages.map(page => (
        <button
          key={page}
          aria-label={`${page} 페이지`}
          aria-current={currentPage === page ? 'page' : undefined}
          className={clsx(
            PAGE_BUTTON_STYLES,
            currentPage === page && 'text-logo',
            page > totalPages && 'hidden',
          )}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      <button aria-label="다음 페이지" onClick={() => handlePageChange(currentPage + 1)}>
        <ChevronRight
          aria-hidden="true"
          className={twMerge(
            clsx(PAGE_BUTTON_STYLES, totalPages === currentPage && DISABLED_PAGE_BUTTON_STYLES),
          )}
        />
      </button>
      <button aria-label="마지막 페이지" onClick={() => handlePageChange(totalPages)}>
        <ChevronLast
          aria-hidden="true"
          className={twMerge(
            clsx(PAGE_BUTTON_STYLES, totalPages === currentPage && DISABLED_PAGE_BUTTON_STYLES),
          )}
        />
      </button>
    </div>
  );
};

export default Pagination;
