import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import TravelHeader from '../TravelHeader';

const TravelPlan = () => {
  return (
    <div className="grid grid-cols-1 gap-4 w-screen min-h-screen md:grid-cols-[360px_1fr]">
      <div className="flex flex-col gap-2 px-4 sm:px-8 sm:w-[560px]">
        <header className="pt-6 text-base">
          <BackNavigation to="home" />
        </header>
        <TravelHeader
          step="마음에 드는 장소를 고정하고 나머지는 다시 추천 받을 수 있어요!"
          stepName="일정 확인"
        />
      </div>
      <div className="h-full bg-skyblue text-center p-20">map</div>
    </div>
  );
};

export default TravelPlan;
