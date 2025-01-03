'use client';

import ReviewCard from '@/components/travel-reviews/ReviewCard';
import { REVIEW_LIST } from './constants';
import Pagination from '@/components/common/pagination/Pagination';
import { useState } from 'react';

const Page = () => {
  const [page, setPage] = useState<number>(1);
  return (
    <div className="flex flex-col items-center gap-12 w-full">
      <h3 className="block text-darkerGray text-3xl">도르멍 후기</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 w-full">
        {REVIEW_LIST.map(review => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </div>
      <Pagination totalResults={100} currentPage={page} setPage={setPage} />
    </div>
  );
};

export default Page;
