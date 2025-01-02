import { z } from 'zod';

export const reviewSchemas = z.object({
  travel_route_id: z.number(),
  review_id: z.number(),
  title: z.string().max(50, { message: '제목은 50자 이하로 작성해 주세요.' }),
  nickname: z.string(),
  content: z.string().max(3000, { message: '후기 작성은 3000자 이하로 작성해 주세요.' }),
  rating: z.number(),
  like_count: z.number(),
  comment_count: z.number(),
  photo_urls: z.string().array(),
  regions: z.string().array(),
  travel_route: z.string().array(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  message: z.string(),
});

export const getReviewResponseSchema = reviewSchemas.omit({
  message: true,
});

export const postReviewRequestSchema = reviewSchemas.pick({
  travel_route_id: true,
  title: true,
  rating: true,
  content: true,
  photo_urls: true,
});

export const postReviewResponseSchema = reviewSchemas.pick({
  review_id: true,
  title: true,
  message: true,
});

export const reviewInReviewListSchema = reviewSchemas.pick({
  nickname: true,
  review_id: true,
  title: true,
  rating: true,
  like_count: true,
  comment_count: true,
  created_at: true,
  updated_at: true,
});

export const getReviewListResponseSchema = z.object({
  page: z.number(),
  size: z.number(),
  total_pages: z.number(),
  total_reviews: z.number(),
  reviews: reviewInReviewListSchema.array(),
});

export const editReviewRequestSchema = reviewSchemas.pick({
  review_id: true,
  title: true,
  content: true,
  rating: true,
  photo_urls: true,
});

export const editReviewResponseSchema = editReviewRequestSchema.extend({
  message: z.string(),
});

export const deleteReviewResponseSchema = reviewSchemas.pick({ message: true });

export const likeReviewResponseSchema = reviewSchemas.pick({ review_id: true, message: true });

export const cancelLikeReviewResponseSchema = reviewSchemas.pick({ message: true });

const commentSchema = z.object({
  comment_id: z.number(),
  content: z.string(),
  message: z.string(),
});

export const postCommentRequestSchema = commentSchema.pick({
  content: true,
});

export const postCommentResponseSchema = commentSchema;

export const getCommentsResponseSchema = commentSchema.array();

export const editCommentRequestSchema = commentSchema.pick({
  comment_id: true,
  content: true,
});

export const editCommentResponseSchema = commentSchema;

export const deleteCommentResponseSchema = commentSchema.pick({
  message: true,
});
