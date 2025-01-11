import { usePatchTravelRouteMutation } from '@/api/travelRouteApi';
import { TravelRouteResponse } from '@/app/travel-plan/types';
import Button from '@/components/common/buttons/Button';
import LayerPopup from '@/components/common/layerPopup/LayerPopup';
import Toggle from '@/components/common/toggle/Toggle';
import { useAppSelector } from '@/store/hooks';
import { useState } from 'react';

const PlaceList = () => {
  const [showRandomLayerPopup, setShowRandomLayerPopup] = useState<boolean>(false);
  const [showSaveLayerPopup, setShowSaveLayerPopup] = useState<boolean>(false);
  const [showSigninLayerPopup, setShowSigninLayerPopup] = useState<boolean>(false);

  const isLoggedIn = useAppSelector(state => !!state.user.user);
  const travelRoute = useAppSelector(
    state => state.travelPlan.scheduleResponse,
  ) as TravelRouteResponse;

  const [] = usePatchTravelRouteMutation();

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

  const handleToggleChange = () => {};

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

  const handleSaveTravelRoute = (title: string = '') => {
    console.log(`저장된 제목: ${title}`);
    setShowSaveLayerPopup(false);
  };

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
              <Toggle label="고정" color="yellow" onChange={handleToggleChange} />
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
          onConfirm={() => console.log('랜덤으로 다시 뽑기')}
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
