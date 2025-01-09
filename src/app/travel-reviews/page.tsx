'use client';

import ReviewCard from '@/components/travel-reviews/reviewCard/ReviewCard';
import Pagination from '@/components/common/pagination/Pagination';
import { useState } from 'react';
import { useGetReviewListQuery } from '@/api/reviewApi';
import LoadingSpinner from '@/components/common/loadingSpinner/LoadingSpinner';
import { SingleReviewType } from './types';

const Page = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error } = useGetReviewListQuery({ page });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center gap-12 w-full">
      <h3 className="block text-darkerGray text-3xl">도르멍 후기</h3>
      {!data && <p>작성된 후기가 없습니다.</p>}
      {error && (
        <p>
          오류가 발생하였습니다.
          <br />
          잠시 후 다시 시도해 주세요.
        </p>
      )}
      {data && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 w-full">
            {data.reviews.map((review: SingleReviewType) => (
              <ReviewCard key={`${review.id}-${review.created_at}`} review={review} />
            ))}
          </div>
          <Pagination totalResults={data.total_reviews} currentPage={page} setPage={setPage} />
        </>
      )}
    </div>
  );
};

export default Page;
