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

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.doreumung.site/api/v1',
  prepareHeaders: headers => {
    const token = getAccessToken();
    if (token && token !== 'undefined') headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});

export default baseQuery;
