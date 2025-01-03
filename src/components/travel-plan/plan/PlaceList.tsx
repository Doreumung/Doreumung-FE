import Button from '@/components/common/buttons/Button';
import Toggle from '@/components/common/toggle/Toggle';

const PlaceList = () => {
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

  const handleRamdom = () => {};

  const handleSubmit = () => {};

  return (
    <div className="flex flex-col items-center gap-6 min-h-screen">
      {places.map(place => (
        <div
          key={place?.id}
          className="flex flex-row justify-around items-center gap-2 min-w-full md:gap-8 md:pt-4"
        >
          <div className="w-12 h-12 border border-darkerGray rounded-2xl bg-lighterGray  md:w-16 md:h-16"></div>
          <div className="flex-grow text-base text-darkerGray md:text-lg">{place?.name}</div>
          {place?.isMeal ? (
            <Toggle label="고정불가" disabled />
          ) : (
            <Toggle label="고정" color="yellow" onChange={handleToggleChange} />
          )}
        </div>
      ))}
      <div className="flex flex-row justify-between w-full pt-2 md:justify-around md:gap-10 md:py-8 md:sticky md:bottom-0 md:bg-background">
        <Button
          size="md"
          color="skyblue"
          shadow="dropShadow"
          label="다시 뽑기"
          onClick={handleRamdom}
        />
        <Button
          size="md"
          color="blue"
          shadow="dropShadow"
          label="저장하기"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default PlaceList;
