declare global {
  interface Window {
    kakao: typeof kakao;
  }
}

declare namespace kakao.maps {
  namespace event {
    function addListener(
      target: object,
      type: string,
      callback: (mouseEvent: KakaoMouseEvent) => void,
    ): void;
  }

  class LatLng {
    constructor(lat: number, lng: number);
    getLat(): number;
    getLng(): number;
  }

  class Map {
    constructor(container: HTMLElement, options: MapOptions);
  }

  interface MapOptions {
    center: LatLng;
    level: number;
  }

  class Polygon {
    constructor(options: PolygonOptions);
    setOptions(options: Partial<PolygonOptions>): void;
  }

  interface PolygonOptions {
    map: Map;
    path: LatLng[];
    strokeWeight: number;
    strokeColor: string;
    strokeOpacity: number;
    fillColor: string;
    fillOpacity: number;
  }

  class CustomOverlay {
    constructor(options: CustomOverlayOptions);
    setContent(content: HTMLElement | string): void;
    setPosition(position: LatLng): void;
    setMap(map: Map | null): void;
  }

  interface CustomOverlayOptions {
    content?: HTMLElement | string;
    map?: Map | null;
    position?: LatLng;
  }

  class Marker {
    constructor(options: MarkerOptions);
    setMap(map: Map | null): void;
    setPosition(position: LatLng): void;
    getPosition(): LatLng;
    setImage(image: MarkerImage): void;
    getTitle(): string;
    setTitle(title: string): void;
    setClickable(clickable: boolean): void;
  }

  interface MarkerOptions {
    position: LatLng;
    map?: Map;
    title?: string;
    image?: MarkerImage;
    clickable?: boolean;
    draggable?: boolean;
    zIndex?: number;
  }

  class MarkerImage {
    constructor(src: string, size: Size, options?: MarkerImageOptions);
  }

  interface MarkerImageOptions {
    offset?: Point;
    shape?: string;
    coords?: string;
  }

  class Size {
    constructor(width: number, height: number);
  }

  class Point {
    constructor(x: number, y: number);
  }

  function load(callback: () => void): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function event(target: object, type: string, callback: (...args: any[]) => void): void;
}
