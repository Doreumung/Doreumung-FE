export type TravelHeaderProps = {
  step: string;
  stepName: string;
};

export type KakaoMouseEvent = {
  latLng: {
    getLat: () => number;
    getLng: () => number;
  };
};

export type TimeType = 'morning' | 'afternoon';

export type ResizeablePanelProps = {
  children: React.ReactNode;
  initialHeight: number;
  minHeight: number;
  maxHeight: number;
};
