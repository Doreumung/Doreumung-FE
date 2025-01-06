import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  user: {
    id: string;
    email: string;
    nickname: string;
    gender: 'male' | 'female' | 'none';
    birthday: string;
    created_at: string;
    updated_at: string;
  } | null;
};

const initialState: UserState = {
  // 다시 수정
  user: {
    id: '',
    email: '',
    nickname: '',
    gender: 'none',
    birthday: '1925-01-01',
    created_at: '',
    updated_at: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ user: UserState['user'] }>) {
      console.log('setUser 액션 호출:', action.payload); // 확인용
      state.user = action.payload.user;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
