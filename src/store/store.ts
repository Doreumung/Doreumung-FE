import { configureStore } from '@reduxjs/toolkit';
import travelPlanReducer from './travelPlanSlice';
import reviewApi from '@/api/reviewApi';

export const store = configureStore({
  reducer: {
    travelPlan: travelPlanReducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(reviewApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
