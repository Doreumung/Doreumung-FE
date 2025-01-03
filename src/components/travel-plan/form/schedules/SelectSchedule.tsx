import TravelHeader from '../../TravelHeader';
import SchedulesForm from './SchedulesForm';

const SelectSchedule = () => {
  return (
    <div className="flex flex-col gap-4 flex-grow md:gap-6">
      <TravelHeader step="테마를 선택하지 않으면 랜덤으로 배정돼요!" stepName="테마 선택" />
      <div className="flex flex-col items-center justify-center gap-4 flex-grow w-full md:gap-8 md:w-auto">
        <SchedulesForm />
      </div>
    </div>
  );
};

export default SelectSchedule;
