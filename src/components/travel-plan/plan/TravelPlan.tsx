import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import TravelHeader from '../TravelHeader';
import PlaceList from './PlaceList';
import TravelPlanMap from './TravelPlanMap';
import ResizeablePanel from './ResizeablePanel';

const TravelPlan = () => {
  return (
    <div className="w-screen min-h-screen">
      <div className="h-screen flex flex-col md:flex-row">
        {/* pc 뷰 */}
        <div className="hidden overflow-auto px-8 md:block w-[440px]">
          <div className="sticky top-0 pb-4 bg-background">
            <header className="pt-8 text-base md:pt-6">
              <BackNavigation to="home" />
            </header>
            <TravelHeader
              step="마음에 드는 장소를 고정하고 나머지는 다시 추천 받을 수 있어요!"
              stepName="일정 확인"
            />
          </div>
          <PlaceList />
        </div>
        <div className="hidden md:block flex-1">
          <TravelPlanMap />
        </div>

        {/* mobile 뷰 */}
        <div className="md:hidden flex flex-col h-full">
          <div className="px-4 pb-4">
            <header className="pt-8 text-base md:pt-6">
              <BackNavigation to="home" />
            </header>
            <TravelHeader
              step="마음에 드는 장소를 고정하고 나머지는 다시 추천 받을 수 있어요!"
              stepName="일정 확인"
            />
          </div>
          <div className="flex-1 relative">
            <TravelPlanMap />
            <ResizeablePanel
              initialHeight={300}
              minHeight={100}
              maxHeight={window.innerHeight - 200}
            >
              <PlaceList />
            </ResizeablePanel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPlan;
