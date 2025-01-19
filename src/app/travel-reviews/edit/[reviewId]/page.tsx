'use client';

import ProtectedRoute from '@/components/travel-reviews/ProtectedRoute';
import ReviewForm from '@/components/travel-reviews/reviewForm/ReviewForm';

const Page = () => {
  return (
    <ProtectedRoute route="edit">
      {(travelRouteInfo, reviewDetail) => (
        <ReviewForm mode="edit" defaultValues={reviewDetail} travelRouteInfo={travelRouteInfo} />
      )}
    </ProtectedRoute>
  );
};

export default Page;
