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
    logout: builder.mutation({
      query: newUser => ({
        url: '/user/logout', // 로그아웃 엔드포인트
        method: 'POST',
        body: newUser, // 요청 데이터
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    // 서버로 GET 요청으로 인증 코드 전달
    sendKakaoCode: builder.query({
      query: (code: string) => ({
        url: `/social/kakao/callback?code=${code}`,
        method: 'GET', // 기본값이 GET이므로 생략 가능
        headers: {
          Accept: 'application/json',
        },
      }),
    }),
    sendGoogleCode: builder.query({
      query: (code: string) => ({
        url: `/social/google/callback?code=${code}`,
      }),
    }),
    getUserInfo: builder.mutation({
      query: () => ({
        url: '/user/me', // 회원정보 받아오기 엔드포인트
        method: 'GET',
      }),
    }),
    updateUserInfo: builder.mutation({
      query: newPassword => ({
        url: '/user/me',
        method: 'PATCH',
        body: newPassword,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    deleteUserInfo: builder.mutation({
      query: () => ({
        url: '/user/me',
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetUserInfoMutation,
  useSendKakaoCodeQuery,
  useSendGoogleCodeQuery,
  useUpdateUserInfoMutation,
  useDeleteUserInfoMutation,
} = userApi;
