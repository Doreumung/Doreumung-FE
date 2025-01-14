import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const getAccessToken = () => {
  const cookies = document.cookie.split('; ');
  const accessTokenCookie = cookies.find(row => row.startsWith('access_token'));

  if (accessTokenCookie) {
    const accessToken = accessTokenCookie.split('=')[1];
    return accessToken;
  }

  return null;
};

const prepareHeaders = (headers: Headers) => {
  const token = getAccessToken();
  if (token && token !== 'undefined') headers.set('Authorization', `Bearer ${token}`);
  return headers;
};

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.doreumung.site/api/v1',
  credentials: 'include', // 테스트용으로 새로 추가
  prepareHeaders,
});

export const imageBaseQuery = fetchBaseQuery({
  baseUrl: 'https://api.doreumung.site/',
  prepareHeaders,
});

export default baseQuery;
