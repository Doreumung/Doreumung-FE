import { Schedule, ScheduleItem } from '@/app/travel-plan/types';
import { useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';

const TravelPlanMap = () => {
  const schedules = useAppSelector(state => state.travelPlan.scheduleResponse) as Schedule;

  useEffect(() => {
    if (!schedules || !('schedule' in schedules) || !schedules.schedule) {
      console.error('스케줄 데이터가 없습니다.');
      return;
    }

    const schedule = schedules.schedule as Schedule;

    console.log('지도에 띄워진 경로: ', schedule);

    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map') as HTMLElement;

        const isMobile = window.innerWidth <= 768;
        const level = isMobile ? 11 : 10;

        const options = {
          center: new window.kakao.maps.LatLng(33.369, 126.571),
          level: level,
        };

        const map = new window.kakao.maps.Map(container, options);

        //장소 - 위도 경도 마커
        if (schedule) {
          const customOverlay = new window.kakao.maps.CustomOverlay({
            map: null,
            content: '',
            position: undefined,
          });

          Object.keys(schedule).forEach(key => {
            const items = Array.isArray(schedule[key as keyof Schedule])
              ? (schedule[key as keyof Schedule] as ScheduleItem[])
              : [schedule[key as keyof Schedule]];

            items.forEach(place => {
              if (place && !Array.isArray(place)) {
                const marker = new window.kakao.maps.Marker({
                  map: map,
                  position: new window.kakao.maps.LatLng(place.latitude, place.longitude),
                });

                // 마커 클릭 이벤트 추가
                window.kakao.maps.event.addListener(marker, 'mouseover', () => {
                  const overlayContent = document.createElement('div');
                  overlayContent.className =
                    'absolute bottom-2 left-4 p-1 bg-white border border-lightGray rounded-md text-sm';
                  overlayContent.innerText = place.name;

                  customOverlay.setContent(overlayContent);
                  customOverlay.setPosition(
                    new window.kakao.maps.LatLng(place.latitude, place.longitude),
                  );
                  customOverlay.setMap(map);
                });

                window.kakao.maps.event.addListener(marker, 'mouseout', () => {
                  customOverlay.setMap(null);
                });
              }
            });
          });
        }
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [schedules]);

  return (
    <div className="relative w-full h-full">
      <div id="map" className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default TravelPlanMap;
