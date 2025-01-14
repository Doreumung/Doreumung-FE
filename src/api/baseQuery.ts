import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const getAccessToken = () => {
  // 로컬 스토리지의 액세스 토큰으로 변경
  // const cookies = document.cookie.split('; ');
  // const accessTokenCookie = cookies.find(row => row.startsWith('access_token'));
  const accessToken = localStorage.getItem('access_token');

  // if (accessTokenCookie) {
  //   const accessToken = accessTokenCookie.split('=')[1];
  //   return accessToken;
  // }
  if (accessToken) {
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
  credentials: 'include',
  prepareHeaders,
});

export const imageBaseQuery = fetchBaseQuery({
  baseUrl: 'https://api.doreumung.site/',
  prepareHeaders,
});

export default baseQuery;
