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
import LayerPopup from '@/components/common/layerPopup/LayerPopup';
import { useRouter } from 'next/navigation';

const MultiStepForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const travelPlanConfig = useAppSelector(state => state.travelPlan.config);

  const [step, setStep] = useState(1);
  const [showLayerPopup, setShowLayerPopup] = useState(false);
  const [showNavigationPopup, setShowNavigationPopup] = useState(false);
  const [navigationPath, setNavigationPath] = useState('');

  useEffect(() => {
    // 새로고침 팝업
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      dispatch(resetTravelPlan());
    };
  }, [dispatch]);

  const handelNextStep = () => {
    setStep(step + 1);
  };
  const handelPrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    if (travelPlanConfig.schedule.morning === 0 && travelPlanConfig.schedule.afternoon === 0) {
      setShowLayerPopup(true);
    } else {
      console.log('여행 일정 폼: ', travelPlanConfig);
      setStep(step + 1);
    }
  };

  const handleNavigation = (path: string) => {
    setNavigationPath(path);
    setShowNavigationPopup(true);
  };

  const handleNavigationConfirm = () => {
    setShowNavigationPopup(false);
    if (navigationPath) {
      router.push(navigationPath);
    } else {
      router.back();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <ProgressIndicator currentStep={step} totalSteps={3} />
      {step < 3 && (
        <div className="flex flex-col gap-2 flex-grow w-screen min-h-screen px-4 pt-8 md:px-8 md:pt-6">
          <header className="text-base">
            <BackNavigation to="home" onNavigate={handleNavigation} />
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

      {showLayerPopup && (
        <LayerPopup
          type="confirm-only"
          label={<>오전, 오후 일정 중 최소 1개 이상 선택해야 합니다.</>}
          onConfirm={() => setShowLayerPopup(false)}
          setShowLayerPopup={setShowLayerPopup}
        />
      )}

      {showNavigationPopup && (
        <LayerPopup
          type="confirm"
          label={
            <>
              작성 중인 내용이 저장되지 않습니다.
              <br /> 정말 나가시겠습니까?
            </>
          }
          onConfirm={handleNavigationConfirm}
          setShowLayerPopup={setShowNavigationPopup}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
