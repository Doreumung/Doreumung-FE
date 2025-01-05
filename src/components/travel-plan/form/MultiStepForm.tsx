'use client';

import Button from '@/components/common/buttons/Button';
import { useEffect, useState } from 'react';
import SelectRegion from './region/SelectRegion';
import SelectSchedule from './schedules/SelectSchedule';
import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import ProgressIndicator from './ProgressIndicator';
import TravelPlan from '../plan/TravelPlan';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { resetTravelPlan } from '@/store/travelPlanSlice';

const MultiStepForm = () => {
  const dispatch = useAppDispatch();
  const travelPlanConfig = useAppSelector(state => state.travelPlan.config);

  useEffect(() => {
    return () => {
      dispatch(resetTravelPlan());
    };
  }, [dispatch]);

  const [step, setStep] = useState(1);

  const handelNextStep = () => {
    setStep(step + 1);
  };
  const handelPrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('여행 일정 폼: ', travelPlanConfig);
    setStep(step + 1);
  };

  return (
    <div className="flex flex-col h-screen">
      <ProgressIndicator currentStep={step} totalSteps={3} />
      {step < 3 && (
        <div className="flex flex-col gap-2 flex-grow w-screen min-h-screen px-4 pt-8 md:px-8 md:pt-6">
          <header className="text-base">
            <BackNavigation to="home" />
          </header>
          <main className="flex-grow flex flex-col">
            <form onSubmit={e => e.preventDefault()} className="flex-grow flex flex-col">
              {step === 1 && <SelectRegion />}
              {step === 2 && <SelectSchedule />}
            </form>
          </main>
          {step < 3 && (
            <footer className="flex justify-between pt-6 pb-4 md:pb-8">
              {step > 1 ? (
                <Button
                  size="md"
                  color="yellow"
                  shadow="dropShadow"
                  label="이전"
                  onClick={handelPrevStep}
                />
              ) : (
                <div></div>
              )}
              {step < 2 ? (
                <Button
                  size="md"
                  color="yellow"
                  shadow="dropShadow"
                  label="다음"
                  onClick={handelNextStep}
                />
              ) : (
                <Button
                  size="md"
                  color="blue"
                  shadow="dropShadow"
                  label="일정 생성"
                  onClick={handleSubmit}
                />
              )}
            </footer>
          )}
        </div>
      )}
      {step === 3 && <TravelPlan />}
    </div>
  );
};

export default MultiStepForm;
