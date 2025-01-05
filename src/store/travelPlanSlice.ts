import { TravelRequest } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TravelRequest & {
  meals: number[];
  selectedToggles: number[];
  themeToggles: number[];
  mealToggles: number[];
} = {
  config: {
    regions: [],
    themes: [],
    schedule: {
      breakfast: false,
      morning: 0,
      lunch: false,
      afternoon: 0,
      dinner: false,
    },
  },
  meals: [],
  selectedToggles: [],
  themeToggles: [],
  mealToggles: [],
};

const travelPlanSlice = createSlice({
  name: 'travelPlan',
  initialState,
  reducers: {
    setRegions(state, action: PayloadAction<string[]>) {
      state.config.regions = action.payload;
    },
    setThemes(state, action: PayloadAction<string[]>) {
      state.config.themes = action.payload;
    },
    updateSchedule(state, action: PayloadAction<Partial<typeof initialState.config.schedule>>) {
      state.config.schedule = { ...state.config.schedule, ...action.payload };
    },
    setMeals(state, action: PayloadAction<number[]>) {
      state.meals = action.payload;
      state.config.schedule.breakfast = action.payload.includes(0);
      state.config.schedule.lunch = action.payload.includes(1);
      state.config.schedule.dinner = action.payload.includes(2);
    },
    setThemeToggles(state, action: PayloadAction<number[]>) {
      state.themeToggles = action.payload;
    },
    setMealToggles(state, action: PayloadAction<number[]>) {
      state.mealToggles = action.payload;
    },
    resetTravelPlan() {
      return initialState;
    },
  },
});

export const {
  setRegions,
  setThemes,
  updateSchedule,
  setMeals,
  setThemeToggles,
  setMealToggles,
  resetTravelPlan,
} = travelPlanSlice.actions;

export default travelPlanSlice.reducer;
