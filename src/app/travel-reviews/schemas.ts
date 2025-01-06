import { z } from 'zod';

export const reviewSchemas = z.object({
  user_id: z.number(),
  travel_route_id: z.number(),
  review_id: z.number(),
  title: z
    .string()
    .min(1, { message: '제목을 입력해 주세요.' })
    .max(50, { message: '제목은 50자 이하로 작성해 주세요.' }),
  nickname: z.string(),
  content: z.string().min(1, { message: '내용을 입력해 주세요.' }),
  rating: z.number().min(0).max(5),
  like_count: z.number(),
  comment_count: z.number(),
  photo_urls: z.string().array(),
  regions: z.string().array(),
  travel_route: z.string().array(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  message: z.string(),
});

export const getReviewDetailResponseSchema = reviewSchemas.omit({
  travel_route_id: true,
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

export const singleReviewSchema = reviewSchemas.pick({
  user_id: true,
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
  reviews: singleReviewSchema.array(),
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

export const commentSchema = z.object({
  comment_id: z.number(),
  review_id: z.number(),
  user_id: z.number(),
  nickname: z.string(),
  content: z
    .string()
    .min(1, { message: '댓글을 입력해 주세요' })
    .max(255, { message: '255자 내로 작성해 주세요.' }),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  message: z.string(),
});

export const postCommentRequestSchema = commentSchema.pick({
  review_id: true,
  content: true,
});

export const postCommentResponseSchema = commentSchema.pick({
  comment_id: true,
  content: true,
  created_at: true,
  message: true,
});

export const getCommentsResponseSchema = commentSchema.array();

export const editCommentRequestSchema = z.object({
  comment: commentSchema.pick({
    comment_id: true,
    content: true,
  }),
  review_id: commentSchema.pick({ review_id: true }),
});

export const editCommentResponseSchema = commentSchema;

export const deleteCommentRequestSchema = commentSchema.pick({
  review_id: true,
  comment_id: true,
});

export const deleteCommentResponseSchema = commentSchema.pick({
  message: true,
});

export const reviewFormSchema = reviewSchemas.pick({
  title: true,
  rating: true,
  content: true,
});

export const commentFormSchema = commentSchema.pick({
  content: true,
});
