import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import {
  DeleteTravelRouteResponse,
  GetTravelRoutesResponse,
  PatchTravelRouteRequest,
  PostSavedTravelRouteRequest,
  PostSavedTravelRouteResponse,
  PostTravelRouteRequest,
  TravelRouteResponse,
} from '@/app/travel-plan/types';

const TRAVEL_ROUTE_LIST_TAG = { type: 'TravelRoutes', id: 'TravelRouteList' } as const;

export const travelRouteApi = createApi({
  reducerPath: 'travelRouteApi',
  baseQuery,
  tagTypes: ['TravelRoutes'],
  endpoints: builder => ({
    // 여행 경로 목록 조회 GET
    getTraveRoutes: builder.query<GetTravelRoutesResponse, { page: number; size: number }>({
      query: ({ page = 1, size = 5 }) => ({
        url: `/travelroute?page=${page}&size=${size}`,
        method: 'GET',
      }),
      providesTags: result =>
        result
          ? [
              ...result.map(({ travelroute_id: id }) => ({ type: 'TravelRoutes', id } as const)),
              TRAVEL_ROUTE_LIST_TAG,
            ]
          : [TRAVEL_ROUTE_LIST_TAG],
    }),
    // 여행 경로 생성 POST
    postTravelRoute: builder.mutation<TravelRouteResponse, PostTravelRouteRequest>({
      query: travelRoute => ({
        url: '/travelroute',
        method: 'POST',
        body: travelRoute,
      }),
      invalidatesTags: [TRAVEL_ROUTE_LIST_TAG],
    }),
    // 여행 경로 수정 PATCH
    patchTravelRoute: builder.mutation<TravelRouteResponse, PatchTravelRouteRequest>({
      query: travelRoute => ({
        url: '/travelroute',
        method: 'PATCH',
        body: travelRoute,
      }),
      invalidatesTags: [TRAVEL_ROUTE_LIST_TAG],
    }),
    // 사용자 여행 경로 저장 POST
    postSavedTravelRoute: builder.mutation<
      PostSavedTravelRouteResponse,
      PostSavedTravelRouteRequest
    >({
      query: savedTravelRoute => ({
        url: '/travelroute/save',
        method: 'POST',
        body: savedTravelRoute,
      }),
    }),
    // 사용자 저장된 여행 경로 조회 GET by ID
    getTravelRouteById: builder.query<GetTravelRoutesResponse, number>({
      query: id => ({
        url: `/travelroute/${id}`,
        method: 'GET',
      }),
      providesTags: (result, _, id) => [{ type: 'TravelRoutes', id }],
    }),
    // 사용자 저장된 여행 경로 삭제 DELETE
    deleteTravelRoute: builder.mutation<DeleteTravelRouteResponse, number>({
      query: id => ({
        url: `/travel-routes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, _, id) => [{ type: 'TravelRoutes', id }, TRAVEL_ROUTE_LIST_TAG],
    }),
  }),
});

export const {
  useGetTraveRoutesQuery,
  usePostTravelRouteMutation,
  usePatchTravelRouteMutation,
  useGetTravelRouteByIdQuery,
  usePostSavedTravelRouteMutation,
  useDeleteTravelRouteMutation,
} = travelRouteApi;

export default travelRouteApi;
