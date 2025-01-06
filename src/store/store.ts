import { configureStore } from '@reduxjs/toolkit';
import travelPlanReducer from './travelPlanSlice';
import reviewApi from '@/api/reviewApi';
import commentApi from '@/api/commentApi';
import { userApi } from '@/api/userApi';
import { persistedUserReducer } from './persistConfig';
import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
  reducer: {
    travelPlan: travelPlanReducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user: persistedUserReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }) //
      .concat(reviewApi.middleware, commentApi.middleware, userApi.middleware),
});

// Redux Persistor 생성
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
