'use client';

import ProtectedRoute from '@/components/travel-reviews/ProtectedRoute';
import ReviewForm from '@/components/travel-reviews/reviewForm/ReviewForm';

const Page = () => {
  return (
    <ProtectedRoute route="create">
      {travelRouteInfo => <ReviewForm mode="create" travelRouteInfo={travelRouteInfo} />}
    </ProtectedRoute>
  );
};

export default Page;
