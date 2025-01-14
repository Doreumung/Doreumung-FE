'use client';

import { useGetTravelRouteByIdQuery } from '@/api/travelRouteApi';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import LoadingSpinner from '@/components/common/loadingSpinner/LoadingSpinner';
import ApiErrorMessage from '@/components/common/errorMessage/ApiErrorMessage';

const Page = () => {
  const { routeId: travel_route_id } = useParams<{ routeId: string }>();

  console.log(travel_route_id);
  const { data, isLoading, error } = useGetTravelRouteByIdQuery(Number(travel_route_id));

  useEffect(() => {
    if (data) {
      console.log('Travel Route Data:', data);
    }
  }, [data]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      {error && <ApiErrorMessage />}
      <p>여행 경로 ID: {travel_route_id}</p>
    </div>
  );
};

export default Page;
