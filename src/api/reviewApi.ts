import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import {
  EditReviewRequestType,
  EditReviewResponseType,
  GetReviewListResponseType,
  GetReviewDetailResponseType,
  PostReviewRequestType,
  PostReviewResponseType,
  DeleteReviewResponseType,
  LikeReviewResponseType,
  CancelLikeReviewResponseType,
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
    deleteReview: build.mutation<DeleteReviewResponseType, string>({
      query: review_id => ({
        url: `/reviews/${review_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reviews'],
    }),
    likeReview: build.mutation<LikeReviewResponseType, number>({
      query: review_id => ({
        url: `/reviews/${review_id}/likes`,
        method: 'POST',
      }),
      invalidatesTags: (result, _, id) => [
        { type: 'Reviews', id },
        { type: 'Reviews', id: 'ReviewList' },
      ],
    }),
    cancelLikeReview: build.mutation<CancelLikeReviewResponseType, number>({
      query: review_id => ({
        url: `/reviews/${review_id}/likes`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, _, id) => [
        { type: 'Reviews', id },
        { type: 'Reviews', id: 'ReviewList' },
      ],
    }),
  }),
});

export const {
  usePostReviewMutation,
  useEditReviewMutation,
  useGetReviewListQuery,
  useGetReviewDetailQuery,
  useDeleteReviewMutation,
  useLikeReviewMutation,
  useCancelLikeReviewMutation,
} = reviewApi;

export default reviewApi;
