import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage를 사용
import userReducer from './userSlice';

const persistConfig = {
  key: 'user', // 스토리지에 저장될 key
  storage, // localStorage를 사용
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export { persistedUserReducer };
