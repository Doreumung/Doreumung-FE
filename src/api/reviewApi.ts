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

const REVIEW_LIST_TAG = { type: 'Reviews', id: 'ReviewList' } as const;

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
      invalidatesTags: [REVIEW_LIST_TAG],
    }),
    editReview: build.mutation<EditReviewResponseType, EditReviewRequestType>({
      query: review => ({
        url: `/reviews/${review.id}`,
        method: 'PATCH',
        body: review,
      }),
      invalidatesTags: (result, _, { id }) => [{ type: 'Reviews', id }],
    }),
    getReviewList: build.query<GetReviewListResponseType, void>({
      query: () => ({
        url: '/reviews',
        method: 'GET',
      }),
      providesTags: result =>
        result
          ? [...result.reviews.map(({ id }) => ({ type: 'Reviews', id } as const)), REVIEW_LIST_TAG]
          : [REVIEW_LIST_TAG],
    }),
    getReviewDetail: build.query<GetReviewDetailResponseType, number>({
      query: review_id => ({
        url: `/reviews/${review_id}`,
        method: 'GET',
      }),
      providesTags: (result, _, id) => [{ type: 'Reviews', id }],
    }),
    deleteReview: build.mutation<DeleteReviewResponseType, number>({
      query: review_id => ({
        url: `/reviews/${review_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, _, id) => [{ type: 'Reviews', id }],
    }),
    likeReview: build.mutation<LikeReviewResponseType, number>({
      query: review_id => ({
        url: `/reviews/${review_id}/likes`,
        method: 'POST',
      }),
      invalidatesTags: (result, _, id) => [{ type: 'Reviews', id }, REVIEW_LIST_TAG],
    }),
    cancelLikeReview: build.mutation<CancelLikeReviewResponseType, number>({
      query: review_id => ({
        url: `/reviews/${review_id}/likes`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, _, id) => [{ type: 'Reviews', id }, REVIEW_LIST_TAG],
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
