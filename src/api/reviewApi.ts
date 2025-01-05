import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import {
  EditReviewRequestType,
  EditReviewResponseType,
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
  }),
});

export const { usePostReviewMutation, useEditReviewMutation } = reviewApi;

export default reviewApi;
