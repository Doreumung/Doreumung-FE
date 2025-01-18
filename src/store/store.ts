import { configureStore } from '@reduxjs/toolkit';
import travelPlanReducer from './travelPlanSlice';
import reviewApi from '@/api/reviewApi';
import commentApi from '@/api/commentApi';
import { userApi } from '@/api/userApi';
import { persistedUserReducer } from './persistConfig';
import persistStore from 'redux-persist/es/persistStore';
import reviewImages from './reviewImagesSlice';
import navigation from './navigationSlice';
import toast from './toastSlice';
import sort from './sortSlice';
import page from './pageSlice';
import travelRouteApi from '@/api/travelRouteApi';
import imageApi from '@/api/imageApi';

export const store = configureStore({
  reducer: {
    [reviewApi.reducerPath]: reviewApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [travelRouteApi.reducerPath]: travelRouteApi.reducer,
    travelPlan: travelPlanReducer,
    user: persistedUserReducer,
    reviewImages,
    navigation,
    toast,
    sort,
    page,
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
        imageApi.middleware,
        userApi.middleware,
        travelRouteApi.middleware,
      ),
});

// Redux Persistor 생성
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
