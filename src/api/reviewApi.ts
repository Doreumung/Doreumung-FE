import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import {
  EditReviewRequestType,
  EditReviewResponseType,
  GetReviewListResponseType,
  GetReviewDetailResponseType,
  PostReviewRequestType,
  PostReviewResponseType,
} from '@/app/travel-reviews/types';

const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery,
  tagTypes: ['Reviews'],
  endpoints: build => ({
    postReview: build.mutation<PostReviewResponseType, PostReviewRequestType>({
      query: review => ({
        url: '/reviews',
        method: 'POST',
        body: review,
      }),
      invalidatesTags: ['Reviews'],
    }),
    editReview: build.mutation<EditReviewResponseType, EditReviewRequestType>({
      query: review => ({
        url: `/reviews/${review.review_id}`,
        method: 'PATCH',
        body: review,
      }),
      invalidatesTags: ['Reviews'],
    }),
    getReviewList: build.query<GetReviewListResponseType, void>({
      query: () => ({
        url: '/reviews',
        method: 'GET',
      }),
      providesTags: ['Reviews'],
    }),
    getReviewDetail: build.query<GetReviewDetailResponseType, string>({
      query: review_id => ({
        url: `/reviews/${review_id}`,
        method: 'GET',
      }),
      providesTags: ['Reviews'],
    }),
  }),
});

export const { usePostReviewMutation, useEditReviewMutation, useGetReviewListQuery } = reviewApi;

export default reviewApi;
