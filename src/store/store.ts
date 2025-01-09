import { configureStore } from '@reduxjs/toolkit';
import travelPlanReducer from './travelPlanSlice';
import reviewApi from '@/api/reviewApi';
import commentApi from '@/api/commentApi';
import { userApi } from '@/api/userApi';
import { persistedUserReducer } from './persistConfig';
import persistStore from 'redux-persist/es/persistStore';
import reviewImages from './reviewImagesSlice';
import travelRouteApi from '@/api/travelRouteApi';

export const store = configureStore({
  reducer: {
    [reviewApi.reducerPath]: reviewApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [travelRouteApi.reducerPath]: travelRouteApi.reducer,
    travelPlan: travelPlanReducer,
    user: persistedUserReducer,
    reviewImages,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }) //
      .concat(
        reviewApi.middleware,
        commentApi.middleware,
        userApi.middleware,
        travelRouteApi.middleware,
      ),
});

// Redux Persistor 생성
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
