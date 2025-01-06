import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import { UserState } from '@/store/userSlice';

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
    login: builder.mutation({
      query: newUser => ({
        url: '/user/login', // 로그인 엔드포인트
        method: 'POST',
        body: newUser, // 요청 데이터
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    getUserInfo: builder.query<UserState['user'], void>({
      query: () => ({
        url: '/user/me', // 회원정보 받아오기 엔드포인트
        method: 'GET',
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useGetUserInfoQuery } = userApi;
