'use client';

import { useEffect } from 'react';
import { jejuArea } from './jejumap';
import { KakaoMouseEvent } from '../../types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setRegions } from '@/store/travelPlanSlice';

const RegionMap = () => {
  const dispatch = useAppDispatch();
  const { regions } = useAppSelector(state => state.travelPlan);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // 카카오맵 로드
      window.kakao.maps.load(() => {
        const container = document.getElementById('map') as HTMLElement;

        const isMobile = window.innerWidth <= 640;
        const level = isMobile ? 11 : 10;

        const options = {
          center: new window.kakao.maps.LatLng(33.369, 126.571),
          level: level,
        };

        const map = new window.kakao.maps.Map(container, options);
        const customOverlay = new window.kakao.maps.CustomOverlay({
          map: null,
          content: '',
        });

        // 제주 구역 다각형 생성
        jejuArea.forEach(area => {
          const polygon = new window.kakao.maps.Polygon({
            map: map,
            path: area.path.map(point => new window.kakao.maps.LatLng(point.lat, point.lng)),
            strokeWeight: 2,
            strokeColor: '#6D6D6D',
            strokeOpacity: 0.8,
            fillColor: regions.includes(area.name) ? '#9EC07F' : '#DBEBCC',
            fillOpacity: 0.7,
          });

          // 마우스 이벤트
          window.kakao.maps.event.addListener(
            polygon,
            'mouseover',
            (mouseEvent: KakaoMouseEvent) => {
              if (!regions.includes(area.name)) {
                polygon.setOptions({
                  fillColor: '#BEDAA3',
                });
              }

              const content = document.createElement('div');
              content.className =
                'absolute -top-[5px] left-4 p-1 border border-gray-400 rounded-md bg-background text-xs';
              content.textContent = area.name;

              customOverlay.setContent(content);
              customOverlay.setPosition(mouseEvent.latLng);
              customOverlay.setMap(map);
            },
          );

          window.kakao.maps.event.addListener(
            polygon,
            'mousemove',
            (mouseEvent: KakaoMouseEvent) => {
              customOverlay.setPosition(mouseEvent.latLng);
            },
          );

          window.kakao.maps.event.addListener(polygon, 'mouseout', () => {
            if (!regions.includes(area.name)) {
              polygon.setOptions({
                fillColor: '#DBEBCC',
              });
            }
            customOverlay.setMap(null);
          });

          window.kakao.maps.event.addListener(polygon, 'click', () => {
            let updatedRegions;

            if (regions.includes(area.name)) {
              updatedRegions = regions.filter(region => region !== area.name);
              polygon.setOptions({
                fillColor: '#DBEBCC',
              });
            } else {
              updatedRegions = Array.from(new Set([...regions, area.name]));
              polygon.setOptions({
                fillColor: '#9EC07F',
              });
            }
            dispatch(setRegions(updatedRegions));
          });
        });
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [dispatch, regions]);

  return (
    <div className="absolute inset-0 flex flex-col z-0">
      <div className="absolute top-4 left-4 z-10 max-w-[calc(100%-2rem)] p-2 border border-darkGray rounded-md shadow-md bg-white text-xs text-darkerGray md:text-base">
        <strong className="text-logo">선택된 지역: </strong>{' '}
        {regions.length > 0 ? regions.join(', ') : '없음'}
      </div>
      <div id="map" className="absolute top-0 left-0 w-full h-full rounded-lg" />
    </div>
  );
};

export default RegionMap;
