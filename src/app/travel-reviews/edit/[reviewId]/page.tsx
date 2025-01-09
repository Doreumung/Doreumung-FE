'use client';

import { useGetReviewDetailQuery, useGetTravelRouteInfoQuery } from '@/api/reviewApi';
import BackNavigation from '@/components/common/backNavigation/BackNavigation';
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
  const { title, rating, content, thumbnail } = data || {
    title: '',
    rating: 0,
    content: '',
    thumbnail: '',
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center w-full">
      {error && (
        <p className="text-red text-center">
          오류가 발생하였습니다.
          <br />
          잠시 후 다시 시도해 주세요.
        </p>
      )}
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
