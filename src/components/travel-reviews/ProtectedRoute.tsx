import { useGetReviewDetailQuery, useGetTravelRouteInfoQuery } from '@/api/reviewApi';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { skipToken } from '@reduxjs/toolkit/query';
import { useParams, useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import BackNavigation from '../common/backNavigation/BackNavigation';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';
import ApiErrorMessage from '../common/errorMessage/ApiErrorMessage';
import { useEffect } from 'react';
import { ProtectedRouteProps } from './types';
import useBeforeUnload from '@/hooks/useBeforeUnload';
import useNavigationPopup from '@/hooks/useNavigationPopup';
import LayerPopup from '../common/layerPopup/LayerPopup';

const ProtectedRoute = ({ route, children }: ProtectedRouteProps) => {
  const router = useRouter();
  const { reviewId, routeId } = useParams();
  const user = useAppSelector((state: RootState) => state.user.user);

  const { showNavigationPopup, handleNavigation, handleNavigationConfirm, handleNavigationCancel } =
    useNavigationPopup();

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
      <div className="flex flex-col items-center w-full">
        {(reviewDetailError || travelRouteInfoError) && <ApiErrorMessage />}
        {!reviewDetailError && !travelRouteInfoError && travelRouteInfo && isAuthorized && (
          <>
            <BackNavigation
              to={route === 'create' ? 'reviewList' : 'review'}
              reviewId={route === 'edit' && reviewDetail ? reviewDetail.review_id : undefined}
              onNavigate={handleNavigation}
            />
            {route === 'create'
              ? children(travelRouteInfo)
              : children(travelRouteInfo, reviewDetail)}
          </>
        )}
        {showNavigationPopup && (
          <LayerPopup
            type="confirm"
            label={
              <>
                {route === 'create' ? '작성' : '수정'} 중인 후기가 저장되지 않았습니다.
                <br /> 정말 페이지를 떠나시겠습니까?
              </>
            }
            onConfirm={handleNavigationConfirm}
            setShowLayerPopup={handleNavigationCancel}
          />
        )}
      </div>
    </>
  );
};

export default ProtectedRoute;
