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
  loginType: 'kakao' | 'google' | 'email';
};

const initialState: UserState = {
  // 다시 수정
  user: {
    id: 'default_id',
    email: '',
    nickname: '',
    gender: 'none',
    birthday: '1925-01-01',
    created_at: '',
    updated_at: '',
  },
  loginType: 'email',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(
      state,
      action: PayloadAction<{ user: UserState['user']; loginType: 'kakao' | 'google' | 'email' }>,
    ) {
      const user = action.payload.user;

      state.user = user
        ? {
            ...user,
            gender: user.gender || 'none',
            birthday: user.birthday || '1925-01-01',
          }
        : null;
      state.loginType = action.payload.loginType; // 로그인 방식 저장
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
