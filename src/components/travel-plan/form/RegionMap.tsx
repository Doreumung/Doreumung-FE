'use client';

import { useEffect } from 'react';
import { jejuArea } from './jejumap';

type KakaoMouseEvent = {
  latLng: {
    getLat: () => number;
    getLng: () => number;
  };
};

const RegionMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // 카카오맵 로드
      window.kakao.maps.load(() => {
        const container = document.getElementById('map') as HTMLElement;
        const options = {
          center: new window.kakao.maps.LatLng(33.399, 126.531),
          level: 10,
        };

        const map = new window.kakao.maps.Map(container, options);
        const customOverlay = new window.kakao.maps.CustomOverlay({
          map: null,
          content: '',
        });

        const selectedPolygons = new Set();

        // 제주 구역 다각형 생성
        jejuArea.forEach(area => {
          const polygon = new window.kakao.maps.Polygon({
            map: map,
            path: area.path.map(point => new window.kakao.maps.LatLng(point.lat, point.lng)),
            strokeWeight: 2,
            strokeColor: '#6D6D6D',
            strokeOpacity: 0.8,
            fillColor: '#DBEBCC',
            fillOpacity: 0.7,
          });

          // 마우스 이벤트
          window.kakao.maps.event.addListener(
            polygon,
            'mouseover',
            (mouseEvent: KakaoMouseEvent) => {
              if (!selectedPolygons.has(polygon)) {
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
            if (!selectedPolygons.has(polygon)) {
              polygon.setOptions({
                fillColor: '#DBEBCC',
              });
            }

            customOverlay.setMap(null);
          });

          window.kakao.maps.event.addListener(polygon, 'click', () => {
            if (selectedPolygons.has(polygon)) {
              selectedPolygons.delete(polygon);
              polygon.setOptions({
                fillColor: '#DBEBCC',
              });
            } else {
              selectedPolygons.add(polygon);
              polygon.setOptions({
                fillColor: '#9EC07F',
              });
            }
          });
        });
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '500px' }} />;
};

export default RegionMap;
