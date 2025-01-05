import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.doreumung.site/api/v1',
  prepareHeaders: headers => {
    const token = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
    if (token) headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});

export default baseQuery;
