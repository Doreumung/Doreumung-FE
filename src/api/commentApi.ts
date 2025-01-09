import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import {
  DeleteCommentRequestType,
  DeleteCommentResponseType,
  EditCommentRequestType,
  EditCommentResponseType,
  GetCommentsResponseType,
  PostCommentRequestType,
  PostCommentResponseType,
} from '@/app/travel-reviews/types';

const COMMENT_TAG_TYPE = { type: 'Comment', id: 'CommentList' } as const;

const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery,
  tagTypes: ['Comment'],
  endpoints: build => ({
    postComment: build.mutation<PostCommentResponseType, PostCommentRequestType>({
      query: ({ review_id, content }) => ({
        url: `/reviews/${review_id}/comment`,
        method: 'POST',
        body: { content },
      }),
      invalidatesTags: [COMMENT_TAG_TYPE],
    }),
    editComment: build.mutation<EditCommentResponseType, EditCommentRequestType>({
      query: ({ content, comment_id }) => ({
        url: `/comments/${comment_id}`,
        method: 'PATCH',
        body: { content },
      }),
      invalidatesTags: (result, _, { comment_id: id }) => [
        { type: 'Comment', id },
        COMMENT_TAG_TYPE,
      ],
    }),
    getComments: build.query<GetCommentsResponseType, number>({
      query: review_id => ({
        url: `/reviews/${review_id}/comment`,
        method: 'GET',
      }),
      providesTags: result =>
        result
          ? [
              ...result.map(({ comment_id: id }) => ({ type: 'Comment', id } as const)),
              COMMENT_TAG_TYPE,
            ]
          : [COMMENT_TAG_TYPE],
    }),
    deleteComment: build.mutation<DeleteCommentResponseType, DeleteCommentRequestType>({
      query: ({ comment_id }) => ({
        url: `/comments/${comment_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, _, { comment_id: id }) => [
        { type: 'Comment', id },
        COMMENT_TAG_TYPE,
      ],
    }),
  }),
});

export const {
  usePostCommentMutation,
  useEditCommentMutation,
  useGetCommentsQuery,
  useDeleteCommentMutation,
} = commentApi;

export default commentApi;
