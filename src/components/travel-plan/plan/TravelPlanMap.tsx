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

        // 경로 URL 생성 함수 (출발지 도착지 모두 포함)
        const createKakaoMapRouteUrl = (
          from: { name: string; latitude: number; longitude: number },
          to: { name: string; latitude: number; longitude: number },
        ) => {
          return `https://map.kakao.com/?sName=${encodeURIComponent(from.name)}&sX=${
            from.longitude
          }&sY=${from.latitude}&eName=${encodeURIComponent(to.name)}&eX=${to.longitude}&eY=${
            to.latitude
          }`;
        };

        // 마커 및 직선 생성
        sortedPlaces.forEach((place, index) => {
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(place.latitude, place.longitude),
          });

          // 다음 장소와의 직선 생성
          if (index < sortedPlaces.length - 1) {
            const nextPlace = sortedPlaces[index + 1];

            // 폴리라인 생성
            const polyline = new window.kakao.maps.Polyline({
              map: map,
              path: [
                new window.kakao.maps.LatLng(place.latitude, place.longitude),
                new window.kakao.maps.LatLng(nextPlace.latitude, nextPlace.longitude),
              ],
              strokeWeight: 5,
              strokeColor: '#FF9B36',
              strokeOpacity: 1,
              strokeStyle: 'solid',
            });

            // 폴리라인 클릭 이벤트 추가
            const kakaoMapRouteUrl = createKakaoMapRouteUrl(place, nextPlace);

            window.kakao.maps.event.addListener(polyline, 'click', () => {
              window.open(kakaoMapRouteUrl, '_blank');
            });
          }

          // 마커 툴팁 (이름 표시)
          const customOverlay = new window.kakao.maps.CustomOverlay({
            map: null,
            content: '',
          });

          // 마우스 오버 시 오버레이 업데이트 및 표시
          window.kakao.maps.event.addListener(marker, 'mouseover', () => {
            const overlayContent = document.createElement('div');
            overlayContent.className =
              'absolute bottom-2 left-4 p-1 bg-white border border-gray-400 rounded-md shadow-md text-sm';
            overlayContent.innerText = `${index + 1}. ${place.name}`;

            customOverlay.setContent(overlayContent);
            customOverlay.setPosition(
              new window.kakao.maps.LatLng(place.latitude, place.longitude),
            );
            customOverlay.setMap(map);
          });

          window.kakao.maps.event.addListener(marker, 'mouseout', () => {
            customOverlay.setMap(null);
          });
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
