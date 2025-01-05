import { configureStore } from '@reduxjs/toolkit';
import travelPlanReducer from './travelPlanSlice';

export const store = configureStore({
  reducer: {
    travelPlan: travelPlanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
