// 여행 일정 type 정의
type ScheduleConfig = {
  breakfast: boolean;
  morning: number;
  lunch: boolean;
  afternoon: number;
  dinner: boolean;
};

type TravelConfig = {
  regions: string[];
  themes: string[];
  schedule: ScheduleConfig;
};

export type TravelRequest = {
  config: TravelConfig;
};
