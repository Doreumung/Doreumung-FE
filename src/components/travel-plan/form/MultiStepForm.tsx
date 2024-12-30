'use client';

import Button from '@/components/common/buttons/Button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SelectRegion from './SelectRegion';
import SelectSchedule from './SelectSchedule';
import TravelHeader from './TravelHeader';

const MultiStepForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const handelNextStep = () => {
    setStep(step + 1);
  };
  const handelPrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {};

  return (
    <div className="flex flex-col gap-2 min-h-screen px-8 pt-4 pb-8">
      <header className="text-base">
        <div onClick={() => router.push('/')}>&lt; 메인으로</div>
      </header>
      <main className="flex-grow">
        <form>
          {step === 1 && (
            <div>
              <TravelHeader step="지역" />
              <SelectRegion />
            </div>
          )}
          {step === 2 && (
            <div>
              <TravelHeader step="테마" />
              <SelectSchedule />
            </div>
          )}
        </form>
      </main>
      <footer className="flex justify-between">
        {step > 1 ? (
          <Button size="md" color="yellow" label="이전" onClick={handelPrevStep} />
        ) : (
          <div></div>
        )}
        {step < 2 ? (
          <Button size="md" color="yellow" label="다음" onClick={handelNextStep} />
        ) : (
          <Button size="md" color="blue" label="일정 생성" onClick={handleSubmit} />
        )}
      </footer>
    </div>
  );
};

export default MultiStepForm;
