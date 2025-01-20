'use client';

import TravelCard from '@/components/my-travel/TravelCard';
import { useGetTraveRoutesQuery } from '@/api/travelRouteApi';
import LoadingSpinner from '@/components/common/loadingSpinner/LoadingSpinner';
import Pagination from '@/components/common/pagination/Pagination';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import ApiErrorMessage from '@/components/common/errorMessage/ApiErrorMessage';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setMyTravelPage } from '@/store/pageSlice';

const Page = () => {
  const dispatch = useAppDispatch();
  const userData = useSelector((state: RootState) => state.user.user);
  const { myTravelPage: page } = useAppSelector((state: RootState) => state.page);

  const itemsPerPage = 5;
  const {
    data: travelRoute,
    isLoading,
    error,
  } = useGetTraveRoutesQuery({
    page,
    size: itemsPerPage,
  });

  const handlePage = (pageNumber: number) => {
    dispatch(setMyTravelPage(pageNumber));
  };

  if (isLoading) return <LoadingSpinner />;

  if (error || !travelRoute)
    return (
      <div className="flex flex-col items-center pt-4 overflow-x-hidden pb-10">
        <ApiErrorMessage />
      </div>
    );

  return (
    <div className="flex flex-col items-center w-full min-h-[calc(100vh - 64px)] pt-4 pb-20 md:min-h-[calc(100vh - 80px)] md:pb-24">
      <p className="py-10 text-3xl">{userData?.nickname}님의 저장 경로</p>
      <div className="flex flex-col gap-8 w-full max-w-3xl mx-auto pb-10">
        {travelRoute.travel_list.length > 0 ? (
          travelRoute.travel_list.map(route => (
            <div key={route.travel_route_id} className="flex-shrink-0">
              <TravelCard
                title={route.title}
                theme={route.config.themes}
                region={route.config.regions}
                placeArray={route.travel_route}
                travel_route_id={route.travel_route_id}
                review_id={route.review_id.length > 0 ? route.review_id[0] : undefined}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-500">저장된 경로가 없습니다.</p>
        )}
      </div>
      {travelRoute.travel_list.length > 0 && (
        <Pagination
          totalResults={travelRoute.total_travel_routes}
          currentPage={page}
          setPage={handlePage}
          perPage={itemsPerPage}
        />
      )}
    </div>
  );
};

export default Page;
