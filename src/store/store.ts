import { configureStore } from '@reduxjs/toolkit';
import travelPlanReducer from './travelPlanSlice';
import reviewApi from '@/api/reviewApi';
import commentApi from '@/api/commentApi';
import { userApi } from '@/api/userApi';

export const store = configureStore({
  reducer: {
    travelPlan: travelPlanReducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware() //
      .concat(reviewApi.middleware, commentApi.middleware, userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
