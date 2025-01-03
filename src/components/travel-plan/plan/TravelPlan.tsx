import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import TravelHeader from '../TravelHeader';
import PlaceList from './PlaceList';
import TravelPlanMap from './TravelPlanMap';
import ResizeablePanel from './ResizeablePanel';
import { useEffect, useState } from 'react';

const TravelPlan = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-screen min-h-screen">
      <div className="h-screen flex flex-col md:flex-row">
        <div className="md:w-[440px] md:overflow-auto px-4 md:px-8 flex-shrink-0">
          <div className="sticky top-0 pb-4 bg-background z-10">
            <header className="pt-8 text-base md:pt-6">
              <BackNavigation to="home" />
            </header>
            <TravelHeader
              step="마음에 드는 장소를 고정하고 나머지는 다시 추천 받을 수 있어요!"
              stepName="일정 확인"
            />
          </div>
          {!isMobile && <PlaceList />}
        </div>

        <div className="flex-1 relative z-0">
          <TravelPlanMap />
        </div>
        {isMobile && (
          <ResizeablePanel initialHeight={200} minHeight={200} maxHeight={window.innerHeight - 200}>
            <PlaceList />
          </ResizeablePanel>
        )}
      </div>
    </div>
  );
};

export default TravelPlan;
