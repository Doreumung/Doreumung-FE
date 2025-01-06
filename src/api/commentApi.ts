import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import {
  EditCommentRequestType,
  EditCommentResponseType,
  PostCommentRequestType,
  PostCommentResponseType,
} from '@/app/travel-reviews/types';

const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery,
  tagTypes: ['Comment'],
  endpoints: build => ({
    postComment: build.mutation<PostCommentResponseType, PostCommentRequestType>({
      query: comment => ({
        url: `/reviews/${comment.review_id}/comment`,
        method: 'POST',
        body: comment,
      }),
      invalidatesTags: ['Comment'],
    }),
    editComment: build.mutation<EditCommentResponseType, EditCommentRequestType>({
      query: ({ comment, review_id }) => ({
        url: `/reviews/${review_id}/comment/${comment.comment_id}`,
        method: 'PATCH',
        body: comment,
      }),
      invalidatesTags: ['Comment'],
    }),
  }),
});

export const { usePostCommentMutation, useEditCommentMutation } = commentApi;

export default commentApi;
