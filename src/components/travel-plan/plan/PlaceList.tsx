import Button from '@/components/common/buttons/Button';
import LayerPopup from '@/components/common/layerPopup/LayerPopup';
import Toggle from '@/components/common/toggle/Toggle';
import { useState } from 'react';

const data = {
  schedule: {
    breakfast: {
      id: 1,
      name: '제주 전복죽',
    },
    morning: [
      { id: 2, name: '한라산 등반' },
      { id: 3, name: '성산 일출봉' },
      { id: 4, name: '협재 해수욕장' },
    ],
    lunch: {
      id: 5,
      name: '흑돼지 불고기',
    },
    afternoon: [
      { id: 6, name: '카페 아메리카노' },
      { id: 7, name: '용두암' },
      { id: 8, name: '천지연 폭포' },
    ],
    dinner: {
      id: 9,
      name: '갈치조림',
    },
  },
  config: {
    regions: ['제주시', '서귀포시'],
    themes: ['자연', '카페'],
  },
};

const PlaceList = () => {
  const [showRandomLayerPopup, setShowRandomLayerPopup] = useState<boolean>(false);
  const [showSaveLayerPopup, setShowSaveLayerPopup] = useState<boolean>(false);
  // 로그인 여부 확인하고 저장하기 눌렀을 때 사용할 state
  // const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const places = [
    data.schedule.breakfast
      ? { id: data.schedule.breakfast.id, name: `🍚 ${data.schedule.breakfast.name}`, isMeal: true }
      : null,
    ...(data.schedule.morning
      ? data.schedule.morning.map(item => ({
          id: item.id,
          name: `📍 ${item.name}`,
          isMeal: false,
        }))
      : []),
    data.schedule.lunch
      ? { id: data.schedule.lunch.id, name: `🍚 ${data.schedule.lunch.name}`, isMeal: true }
      : null,
    ...(data.schedule.afternoon
      ? data.schedule.afternoon.map(item => ({
          id: item.id,
          name: `📍 ${item.name}`,
          isMeal: false,
        }))
      : []),
    data.schedule.dinner
      ? { id: data.schedule.dinner.id, name: `🍚 ${data.schedule.dinner.name}`, isMeal: true }
      : null,
  ].filter(Boolean);

  const handleToggleChange = () => {};

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-8 pb-8 md:flex-grow md:px-8 md:py-4 md:overflow-auto">
        {places.map(place => (
          <div
            key={place?.id}
            className="flex flex-row justify-around items-center gap-4 min-w-full"
          >
            <div className="w-14 h-14 border border-darkerGray rounded-2xl bg-lighterGray md:w-16 md:h-16"></div>
            <div className="flex-grow text-base text-darkerGray md:text-lg">{place?.name}</div>
            {place?.isMeal ? (
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
          onClick={() => setShowSaveLayerPopup(true)}
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

      {showSaveLayerPopup && (
        <LayerPopup
          label={
            <>
              일정의 제목을 입력해 주세요. <br />
              제목을 지정하지 않으면 오늘 날짜로 지정됩니다.
            </>
          }
          type="input"
          onConfirm={title => console.log(`일정 저장하기: ${title || '오늘 날짜'}`)}
          setShowLayerPopup={setShowSaveLayerPopup}
        />
      )}

      {/* <LayerPopup
        label={
          <>
            회원만 이용이 가능한 서비스 입니다.<br />
            로그인 페이지로 이동하시겠습니까?
          </>
        }
        onConfirm={ => }
        setShowLayerPopup={}
      /> */}
    </div>
  );
};

export default PlaceList;
