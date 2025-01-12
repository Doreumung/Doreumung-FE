import { usePatchTravelRouteMutation, usePostSavedTravelRouteMutation } from '@/api/travelRouteApi';
import { PatchTravelRouteRequest, TravelRouteResponse } from '@/app/travel-plan/types';
import Button from '@/components/common/buttons/Button';
import LayerPopup from '@/components/common/layerPopup/LayerPopup';
import LoadingSpinner from '@/components/common/loadingSpinner/LoadingSpinner';
import Toggle from '@/components/common/toggle/Toggle';
import { useAppSelector } from '@/store/hooks';
import { setScheduleResponse } from '@/store/travelPlanSlice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const PlaceList = () => {
  const [showRandomLayerPopup, setShowRandomLayerPopup] = useState<boolean>(false);
  const [showSaveLayerPopup, setShowSaveLayerPopup] = useState<boolean>(false);
  const [showSigninLayerPopup, setShowSigninLayerPopup] = useState<boolean>(false);
  const [toggledStates, setToggledState] = useState<Record<number, boolean>>({});

  const router = useRouter();

  const dispatch = useDispatch();
  const isLoggedIn = useAppSelector(state => !!state.user.user);
  const travelRoute = useAppSelector(
    state => state.travelPlan.scheduleResponse,
  ) as TravelRouteResponse;

  const [postSavedTravelRoute, { isLoading }] = usePostSavedTravelRouteMutation();
  const [patchTravelRoute] = usePatchTravelRouteMutation();

  const travelPlaces = [
    travelRoute.schedule.breakfast
      ? {
          id: travelRoute.schedule.breakfast.place_id,
          name: `🍚 ${travelRoute.schedule.breakfast.name}`,
          isMeal: true,
        }
      : null,
    ...(Array.isArray(travelRoute.schedule.morning)
      ? travelRoute.schedule.morning.map(item => ({
          id: item.place_id,
          name: `☀️ ${item.name}`,
          isMeal: false,
        }))
      : []),
    travelRoute.schedule.lunch
      ? {
          id: travelRoute.schedule.lunch.place_id,
          name: `🍚 ${travelRoute.schedule.lunch.name}`,
          isMeal: true,
        }
      : null,
    ...(Array.isArray(travelRoute.schedule.afternoon)
      ? travelRoute.schedule.afternoon.map(item => ({
          id: item.place_id,
          name: `🌕 ${item.name}`,
          isMeal: false,
        }))
      : []),
    travelRoute.schedule.dinner
      ? {
          id: travelRoute.schedule.dinner.place_id,
          name: `🍚 ${travelRoute.schedule.dinner.name}`,
          isMeal: true,
        }
      : null,
  ].filter(Boolean);

  const handleToggleChange = (place_id: number, isToggled: boolean) => {
    setToggledState(prev => ({ ...prev, [place_id]: isToggled }));
    console.log('장소 id: ', place_id, '토글 여부: ', isToggled);
  };

  const handleReramdomTravelRoute = async () => {
    // 필터 코드 수정해야함
    const filteredSchedule = Object.entries(travelRoute.schedule).reduce((acc, [key, value]) => {
      if (Array.isArray(value)) {
        acc[key] = value.filter(item => toggledStates[item.place_id] === false);
      } else if (value && toggledStates[value.place_id] === false) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, unknown>);

    console.log('필터 장소: ', filteredSchedule);

    const payload: PatchTravelRouteRequest = {
      schedule: {
        breakfast: null,
        morning: [],
        lunch: null,
        afternoon: [],
        dinner: null,
        ...filteredSchedule,
      },
      config: travelRoute.config,
    };
    console.log('보내는 데이터: ', payload);
    try {
      const response = await patchTravelRoute(payload).unwrap();
      console.log('patch 결과: ', response);
      dispatch(setScheduleResponse(response));
      setShowRandomLayerPopup(false);
    } catch (error) {
      console.error('패치 요청 실패: ', error);
    }
  };

  const handleSaveClick = () => {
    if (isLoggedIn) {
      setShowSaveLayerPopup(true);
    } else {
      setShowSigninLayerPopup(true);
    }
  };

  const handleRedirectToSignin = () => {
    setShowSigninLayerPopup(false);
    // 라우터 통해 로그인 페이지 이동
  };

  const handleSaveTravelRoute = async (title: string = '') => {
    const saveTravelRoute = {
      title,
      schedule: travelRoute.schedule,
      config: travelRoute.config,
    };
    try {
      await postSavedTravelRoute(saveTravelRoute).unwrap();

      setShowSaveLayerPopup(false);
      // 추후 저장 경로 상세페이지로 이동시키기
      router.push('/');
    } catch (error) {
      console.log('저장실패: ', error);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-8 pb-8 md:flex-grow md:px-8 md:py-4 md:overflow-auto">
        {travelPlaces.map(travelPlace => (
          <div
            key={travelPlace?.id}
            className="flex flex-row justify-around items-center gap-4 min-w-full"
          >
            <div className="w-14 h-14 border border-darkerGray rounded-2xl bg-lighterGray md:w-16 md:h-16"></div>
            <div className="flex-grow text-base text-darkerGray md:text-lg">
              {travelPlace?.name}
            </div>
            {travelPlace?.isMeal ? (
              <Toggle label="고정불가" disabled />
            ) : (
              <Toggle
                label="고정"
                color="yellow"
                onChange={(isToggled: boolean) =>
                  travelPlace && handleToggleChange(travelPlace.id, isToggled)
                }
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between w-full pt-2 pb-6 md:gap-10 md:px-8 md:py-8 md:bg-background">
        <Button
          size="md"
          color="skyblue"
          shadow="dropShadow"
          label="다시 뽑기"
          onClick={() => setShowRandomLayerPopup(true)}
        />
        <Button
          size="md"
          color="blue"
          shadow="dropShadow"
          label="저장하기"
          onClick={handleSaveClick}
        />
      </div>

      {showRandomLayerPopup && (
        <LayerPopup
          label={
            <>
              고정되지 않은 여행지 및 식당이 랜덤으로 다시 배정됩니다. <br />
              계속하시겠습니까?
            </>
          }
          onConfirm={handleReramdomTravelRoute}
          setShowLayerPopup={setShowRandomLayerPopup}
        />
      )}
      {showSigninLayerPopup && (
        <LayerPopup
          label={
            <>
              회원만 이용이 가능한 서비스 입니다.
              <br />
              확인을 누르시면 로그인 페이지로 이동합니다.
            </>
          }
          onConfirm={handleRedirectToSignin}
          setShowLayerPopup={setShowSigninLayerPopup}
        />
      )}

      {showSaveLayerPopup && (
        <LayerPopup
          label={
            <>
              일정의 제목을 입력해 주세요. <br />
              제목을 지정하지 않으면 오늘 날짜로 지정됩니다.
            </>
          }
          type="input"
          onConfirm={title => handleSaveTravelRoute(title)}
          setShowLayerPopup={setShowSaveLayerPopup}
        />
      )}
    </div>
  );
};

export default PlaceList;
