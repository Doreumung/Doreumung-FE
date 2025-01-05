import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi', // 리듀서 경로 이름
  baseQuery,
  endpoints: builder => ({
    signUp: builder.mutation({
      query: newUser => ({
        url: '/user/signup', // 회원가입 엔드포인트
        method: 'POST',
        body: newUser, // 요청 데이터
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useSignUpMutation } = userApi;
