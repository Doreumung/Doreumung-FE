'use client';

import TravelCard from '@/components/my-travel/TravelCard';
import travelRoutes from './travelRoutes';

const Page = () => {
  // 스케줄의 이름 받아오기 (방문 장소 이름) - 임시데이터 사용
  const allPlaceNames = travelRoutes.map(travelRoute => {
    return Object.values(travelRoute.schedule).map(item => item.name);
  });

  return (
    <div className="flex flex-col items-center pt-4 overflow-x-hidden pb-10">
      <p className="py-16 text-3xl">김돌멍님의 저장 경로</p> {/* 사용자 이름 받아와서 적용 */}
      <div className="flex flex-col w-full max-w-[768px] px-4 mx-auto gap-8 md:pb-10">
        {travelRoutes.map(travelRoute => (
          <div key={travelRoute.travelroute_id} className="flex-shrink-0">
            <TravelCard
              title={travelRoute.title}
              region={travelRoute.config.regions}
              placeArray={allPlaceNames[travelRoute.travelroute_id - 1]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
