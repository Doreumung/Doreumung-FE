import { Schedule } from '@/app/travel-plan/types';
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

        const sortedPlaces: { name: string; latitude: number; longitude: number }[] = [
          schedule.breakfast,
          ...(Array.isArray(schedule.morning) ? schedule.morning : []),
          schedule.lunch,
          ...(Array.isArray(schedule.afternoon) ? schedule.afternoon : []),
          schedule.dinner,
        ].filter(Boolean) as { name: string; latitude: number; longitude: number }[];

        //장소 - 위도 경도 마커
        sortedPlaces.forEach((place, index) => {
          if (place && !Array.isArray(place)) {
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: new window.kakao.maps.LatLng(place.latitude, place.longitude),
            });

            // 커스텀 오버레이 생성 (번호와 장소 이름 표시)
            const overlayContent = document.createElement('div');
            overlayContent.style.position = 'absolute';
            overlayContent.style.background = '#fff';
            overlayContent.style.border = '1px solid #ccc';
            overlayContent.style.borderRadius = '4px';
            overlayContent.style.padding = '5px';
            overlayContent.style.fontSize = '12px';
            overlayContent.style.fontWeight = 'bold';
            overlayContent.style.color = '#333';
            overlayContent.innerText = `${index + 1}. ${place.name}`;

            const customOverlay = new window.kakao.maps.CustomOverlay({
              content: overlayContent,
              position: new window.kakao.maps.LatLng(place.latitude, place.longitude),
              map: map,
            });

            // 마우스 이벤트로 툴팁 표시
            window.kakao.maps.event.addListener(marker, 'mouseover', () => {
              customOverlay.setMap(map);
            });

            window.kakao.maps.event.addListener(marker, 'mouseout', () => {
              customOverlay.setMap(null);
            });
          }
        });
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
