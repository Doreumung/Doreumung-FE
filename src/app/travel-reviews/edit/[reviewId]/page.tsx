'use client';

import { useGetReviewDetailQuery, useGetTravelRouteInfoQuery } from '@/api/reviewApi';
import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import ApiErrorMessage from '@/components/common/errorMessage/ApiErrorMessage';
import LoadingSpinner from '@/components/common/loadingSpinner/LoadingSpinner';
import ReviewForm from '@/components/travel-reviews/reviewForm/ReviewForm';
import { useParams } from 'next/navigation';

const Page = () => {
  const { reviewId } = useParams();
  const { data, isLoading, error } = useGetReviewDetailQuery(Number(reviewId));
  const { data: travelRouteInfo } = useGetTravelRouteInfoQuery(
    { travel_route_id: data!.travel_route_id },
    { skip: !data },
  );
  const { title = '', rating = 0, content = '', thumbnail = '' } = data || {};

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center w-full">
      {error && <ApiErrorMessage />}
      {!error && travelRouteInfo && (
        <>
          <BackNavigation to="review" reviewId={reviewId as string} />
          <h3 className="block py-12 text-darkerGray text-3xl">후기 수정</h3>
          <ReviewForm
            mode="edit"
            defaultValues={{ title, rating, content, thumbnail }}
            travelRouteInfo={travelRouteInfo}
          />
        </>
      )}
    </div>
  );
};

export default Page;
