'use client';

import ProtectedRoute from '@/components/travel-reviews/ProtectedRoute';
import ReviewForm from '@/components/travel-reviews/reviewForm/ReviewForm';

const Page = () => {
  return (
    <>
      <ProtectedRoute route="edit">
        {(travelRouteInfo, reviewDetail) => (
          <>
            <h3 className="block py-12 text-darkerGray text-3xl">후기 수정</h3>
            <ReviewForm
              mode="edit"
              defaultValues={reviewDetail}
              travelRouteInfo={travelRouteInfo}
            />
          </>
        )}
      </ProtectedRoute>
    </>
  );
};

export default Page;
