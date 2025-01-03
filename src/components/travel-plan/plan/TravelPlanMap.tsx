import { useEffect } from 'react';

const TravelPlanMap = () => {
  useEffect(() => {
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

        new window.kakao.maps.Map(container, options);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div id="map" className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default TravelPlanMap;
