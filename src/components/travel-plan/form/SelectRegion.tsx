import TravelHeader from '../TravelHeader';
import RegionMap from './RegionMap';

const SelectRegion = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <TravelHeader step="지역을 선택하지 않으면 랜덤으로 배정돼요!" stepName="지역 선택" />
      <RegionMap />
    </div>
  );
};

export default SelectRegion;
