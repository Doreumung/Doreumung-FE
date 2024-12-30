'use client';

import Button from '@/components/common/buttons/Button';
import { useState } from 'react';
import SelectRegion from './SelectRegion';
import SelectSchedule from './SelectSchedule';
import TravelHeader from '../TravelHeader';
import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import ProgressIndicator from './ProgressIndicator';
import TravelPlan from '../plan/TravelPlan';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const handelNextStep = () => {
    setStep(step + 1);
  };
  const handelPrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    setStep(step + 1);
  };

  return (
    <div>
      <ProgressIndicator currentStep={step} totalSteps={3} />
      {step < 3 && (
        <div className="flex flex-col gap-2 w-screen min-h-screen px-4 pt-6 pb-8 sm:px-8">
          <header className="text-base">
            <BackNavigation to="home" />
          </header>
          <main className="flex-grow">
            <form>
              {step === 1 && (
                <div>
                  <TravelHeader
                    step="지역을 선택하지 않으면 랜덤으로 배정돼요!"
                    stepName="지역 선택"
                  />
                  <SelectRegion />
                </div>
              )}
              {step === 2 && (
                <div>
                  <TravelHeader
                    step="테마을 선택하지 않으면 랜덤으로 배정돼요!"
                    stepName="테마 선택"
                  />
                  <SelectSchedule />
                </div>
              )}
            </form>
          </main>
          {step < 3 && (
            <footer className="flex justify-between">
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
