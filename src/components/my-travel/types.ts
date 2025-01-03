export type Place = {
  place_id: number;
  name: string;
  latitude: string;
  logitude: string;
};

export type Schedule = {
  breakfast?: Place;
  morning1?: Place;
  morning2?: Place;
  morning3?: Place;
  lunch?: Place;
  afternoon1?: Place;
  afternoon2?: Place;
  afternoon3?: Place;
  dinner?: Place;
};

export type Config = {
  regions: string[];
  themes: string[];
  schedule: {
    breakfast: boolean;
    morning: number; // 1, 2, 3 중 하나
    lunch: boolean;
    afternoon: number; // 0, 1, 2, 3 중 하나
    dinner: boolean;
  };
};

export type TravelRoute = {
  travelroute_id: number;
  user_id: number;
  title: string;
  schedule: Schedule;
  config: Config;
};
