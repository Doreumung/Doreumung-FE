import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';
import { GetCommentsResponseType } from '@/app/travel-reviews/types';

const COMMENT_TAG_TYPE = { type: 'Comment', id: 'CommentList' } as const;

const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery,
  tagTypes: ['Comment'],
  endpoints: build => ({
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
  }),
});

export const { useGetCommentsQuery } = commentApi;

export default commentApi;
