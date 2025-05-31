'use client';

import { useGetReviewListQuery } from '@/api/reviewApi';
import Button from '@/components/common/buttons/Button';
import ApiErrorMessage from '@/components/common/errorMessage/ApiErrorMessage';
import LoadingSpinner from '@/components/common/loadingSpinner/LoadingSpinner';
import Pagination from '@/components/common/pagination/Pagination';
import SpeechBubble from '@/components/common/speechBubble/SpeechBubble';
import { SORTING_OPTIONS } from '@/components/travel-reviews/constants';
import ReviewCard from '@/components/travel-reviews/reviewCard/ReviewCard';
import SortingOption from '@/components/travel-reviews/SortingOption';
import { SortCriteria } from '@/components/travel-reviews/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setReviewPage } from '@/store/pageSlice';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { SingleReviewType } from './types';

const Page = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { sortState, orderBy } = useAppSelector((state: RootState) => state.sort);
  const { reviewPage: page } = useAppSelector((state: RootState) => state.page);

  const { data, isLoading, error } = useGetReviewListQuery({
    page,
    order_by: orderBy,
    order: sortState[orderBy],
  });

  const handlePage = (pageNumber: number) => {
    dispatch(setReviewPage(pageNumber));
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center gap-6 w-full pt-9 ">
      {error && <ApiErrorMessage />}
      {!error && (
        <>
          <section className="flex flex-col gap-3 self-start relative size-24">
            <div className="size-24 bg-dolmung bg-cover bg-center shrink-0" />
            <SpeechBubble
              text="도르멍과 함께한 후기를 들려주세요!"
              className="absolute -top-9 -right-48 sm:-right-56 w-max"
            />
          </section>

          {(!data || (data && data.reviews.length === 0)) && (
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

          {data && data.reviews.length > 0 && (
            <>
              <div className="flex gap-2 self-end">
                {SORTING_OPTIONS.map((option: SortCriteria) => (
                  <SortingOption key={option} option={option} />
                ))}
              </div>

              <div className="flex flex-col items-center gap-10 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 w-full max-w-2xl lg:max-w-6xl">
                  {data.reviews.map((review: SingleReviewType) => (
                    <ReviewCard key={`${review.review_id}-${review.created_at}`} review={review} />
                  ))}
                </div>
                <Pagination
                  totalResults={data.total_reviews}
                  currentPage={page}
                  setPage={handlePage}
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
