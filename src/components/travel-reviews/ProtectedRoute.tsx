import { useGetReviewDetailQuery, useGetTravelRouteInfoQuery } from '@/api/reviewApi';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { skipToken } from '@reduxjs/toolkit/query';
import { useParams, useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';
import ApiErrorMessage from '../common/errorMessage/ApiErrorMessage';
import { useEffect } from 'react';
import { ProtectedRouteProps } from './types';
import useBeforeUnload from '@/hooks/useBeforeUnload';

const ProtectedRoute = ({ route, children }: ProtectedRouteProps) => {
  const router = useRouter();
  const { reviewId, routeId } = useParams();
  const user = useAppSelector((state: RootState) => state.user.user);

  useBeforeUnload();

  const {
    data: reviewDetail,
    isLoading: reviewDetailLoading,
    error: reviewDetailError,
  } = useGetReviewDetailQuery(reviewId ? Number(reviewId) : skipToken);

  const travelRouteId =
    route === 'create' ? Number(routeId) : reviewDetail && reviewDetail.travel_route_id;

  const {
    data: travelRouteInfo,
    isLoading: travelRouteInfoLoading,
    error: travelRouteInfoError,
  } = useGetTravelRouteInfoQuery(travelRouteId ? { travel_route_id: travelRouteId } : skipToken, {
    skip: !travelRouteId,
  });

  const userId = route === 'create' ? travelRouteInfo?.user_id : reviewDetail?.user_id;

  const isAuthorized = user && user.id === userId;

  useEffect(() => {
    if (userId && !isAuthorized) {
      setCookie(null, 'redirectMode', 'UNAUTHORIZED');
      router.push('/redirect');
    }
  }, [isAuthorized, userId, router]);

  if (reviewDetailLoading || travelRouteInfoLoading) return <LoadingSpinner />;

  return (
    <>
      {(reviewDetailError || travelRouteInfoError) && <ApiErrorMessage />}
      {!reviewDetailError && !travelRouteInfoError && travelRouteInfo && isAuthorized && (
        <>
          {route === 'create' ? children(travelRouteInfo) : children(travelRouteInfo, reviewDetail)}
        </>
      )}
    </>
  );
};

export default ProtectedRoute;
