'use client';

import ProtectedRoute from '@/components/travel-reviews/ProtectedRoute';
import ReviewForm from '@/components/travel-reviews/reviewForm/ReviewForm';

const Page = () => {
  return (
    <ProtectedRoute route="create">
      {travelRouteInfo => (
        <>
          <h3 className="block py-12 text-3xl">후기 작성</h3>
          <ReviewForm mode="create" travelRouteInfo={travelRouteInfo} />
        </>
      )}
    </ProtectedRoute>
  );
};

export default Page;
