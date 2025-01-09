'use client';

import { useGetTravelRouteInfoQuery } from '@/api/reviewApi';
import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import ReviewForm from '@/components/travel-reviews/reviewForm/ReviewForm';
import { useParams } from 'next/navigation';

const Page = () => {
  const { routeId } = useParams();
  const { data: travelRouteInfo } = useGetTravelRouteInfoQuery(
    { travel_route_id: Number(routeId) },
    { skip: !routeId },
  );

  return (
    <div className="flex flex-col items-center w-full">
      <BackNavigation to="reviewList" />
      <h3 className="block py-12 text-darkerGray text-3xl">후기 작성</h3>
      {travelRouteInfo && <ReviewForm mode="create" travelRouteInfo={travelRouteInfo} />}
    </div>
  );
};

export default Page;
