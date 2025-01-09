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

type UpdateUserState = Partial<
  Pick<NonNullable<UserState['user']>, 'email' | 'nickname' | 'gender' | 'birthday'>
>;

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
    updateUser(state, action: PayloadAction<UpdateUserState>) {
      // 상태가 null인 경우 안전하게 처리
      if (state.user) {
        // 전달받은 필드만 업데이트
        Object.assign(state.user, action.payload);
      }
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
