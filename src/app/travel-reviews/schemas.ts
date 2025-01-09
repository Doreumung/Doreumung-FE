import { z } from 'zod';

export const reviewSchemas = z.object({
  review_id: z.number(),
  user_id: z.string(),
  travel_route_id: z.number(),
  title: z
    .string()
    .min(1, { message: '제목을 입력해 주세요.' })
    .max(50, { message: '제목은 50자 이하로 작성해 주세요.' }),
  nickname: z.string(),
  content: z
    .string()
    .min(1, { message: '내용을 입력해 주세요.' })
    .max(3000, { message: '내용은 3000자 이하로 작성해 주세요.' }),
  rating: z.number().min(0).max(5),
  like_count: z.number(),
  liked_by_user: z.boolean(),
  comment_count: z.number(),
  regions: z.string().array(),
  travel_route: z.string().array(),
  themes: z.string().array(),
  thumbnail: z.string(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  message: z.string(),
});

export const getReviewDetailResponseSchema = reviewSchemas.omit({
  travel_route_id: true,
  comment_count: true,
});

export const postReviewRequestSchema = reviewSchemas.pick({
  travel_route_id: true,
  title: true,
  rating: true,
  content: true,
  thumbnail: true,
});

export const postReviewResponseSchema = reviewSchemas
  .pick({
    review_id: true,
    user_id: true,
    nickname: true,
    like_count: true,
    liked_by_user: true,
    created_at: true,
    updated_at: true,
  })
  .merge(postReviewRequestSchema);

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

const pagingSchema = z.object({
  page: z.number(),
  size: z.number().optional(),
  total_pages: z.number(),
  total_reviews: z.number(),
  order_by: z.string().optional(),
  order: z.string().optional(),
});

export const getReviewListRequestSchema = pagingSchema.pick({
  page: true,
  size: true,
  order_by: true,
  order: true,
});

export const getReviewListResponseSchema = pagingSchema
  .pick({
    page: true,
    size: true,
    total_pages: true,
    total_reviews: true,
  })
  .extend({
    reviews: singleReviewSchema.array(),
  });

export const editReviewRequestSchema = reviewSchemas.pick({
  review_id: true,
  title: true,
  content: true,
  rating: true,
  thumbnail: true,
});

export const editReviewResponseSchema = reviewSchemas.omit({
  comment_count: true,
  user_id: true,
});

export const deleteReviewRequestSchema = reviewSchemas.pick({ review_id: true });

export const deleteReviewResponseSchema = reviewSchemas.pick({ message: true });

export const likeReviewResponseSchema = reviewSchemas.pick({ review_id: true });

export const cancelLikeReviewResponseSchema = reviewSchemas.pick({ review_id: true });

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
