import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api' }),
  endpoints: (builder) => ({
    getPersons: builder.query({
      query: () => `/people`,
    }),
    getPersonsSearch: builder.query({
      query: (searchId) => `/people/?search=${searchId}`,
    }),
  }),
});

export const { useGetPersonsQuery, useGetPersonsSearchQuery } = apiSlice;
