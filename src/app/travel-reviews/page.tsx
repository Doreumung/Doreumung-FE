'use client';

import ReviewCard from '@/components/travel-reviews/reviewCard/ReviewCard';
import Pagination from '@/components/common/pagination/Pagination';
import { useState } from 'react';
import { useGetReviewListQuery } from '@/api/reviewApi';
import LoadingSpinner from '@/components/common/loadingSpinner/LoadingSpinner';
import { SingleReviewType } from './types';
import { useRouter } from 'next/navigation';
import Button from '@/components/common/buttons/Button';
import ApiErrorMessage from '@/components/common/errorMessage/ApiErrorMessage';
import SpeechBubble from '@/components/common/speechBubble/SpeechBubble';
import SortingOption from '@/components/travel-reviews/SortingOption';
import { SortCriteria, SortState } from '@/components/travel-reviews/types';
import { SORTING_OPTIONS } from '@/components/travel-reviews/constants';

const Page = () => {
  const router = useRouter();

  const [page, setPage] = useState<number>(1);
  const [orderBy, setOrderBy] = useState<SortCriteria>('created_at');
  const [sortingOptions, setSortingOptions] = useState<SortState>({
    like_count: 'desc',
    comment_count: 'desc',
    created_at: 'desc',
  });

  const { data, isLoading, error } = useGetReviewListQuery({
    page,
    order_by: orderBy,
    order: sortingOptions[orderBy],
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center gap-6 w-full pt-10">
      {error && <ApiErrorMessage />}
      {!error && (
        <>
          <section className="flex flex-col gap-3 self-start relative w-full">
            <div className="size-24 bg-dolmung bg-cover bg-center shrink-0" />
            <SpeechBubble
              text="도르멍과 함께한 후기를 들려주세요!"
              className="absolute -top-10 -right-12"
            />
          </section>

          {!data && (
            <>
              <p className="text-center">
                작성된 후기가 없습니다.
                <br />
                도르멍 서비스를 경험하고 후기를 작성해 주세요!
              </p>

              <Button
                size="md"
                shadow="dropShadow"
                label="일정 생성하기"
                className="w-48"
                onClick={() => router.push('/travel-plan')}
              />
            </>
          )}

          {data && (
            <>
              <div className="flex gap-2 self-end">
                {SORTING_OPTIONS.map((option: SortCriteria) => (
                  <SortingOption
                    key={option}
                    orderBy={orderBy}
                    setOrderBy={setOrderBy}
                    sortingOptions={sortingOptions}
                    setSortingOptions={setSortingOptions}
                    option={option}
                  />
                ))}
              </div>

              <div className="flex flex-col items-center gap-12 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 w-full">
                  {data.reviews.map((review: SingleReviewType) => (
                    <ReviewCard key={`${review.review_id}-${review.created_at}`} review={review} />
                  ))}
                </div>
                <Pagination
                  totalResults={data.total_reviews}
                  currentPage={page}
                  setPage={setPage}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Page;
