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
  thumbnail: z.string().nullable(),
  uploaded_urls: z.string().array().optional(),
  deleted_urls: z.string().array().optional(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export const getReviewDetailResponseSchema = reviewSchemas.omit({
  comment_count: true,
});

export const postReviewRequestSchema = reviewSchemas
  .pick({
    uploaded_urls: true,
    deleted_urls: true,
  })
  .extend({
    body: reviewSchemas.pick({
      travel_route_id: true,
      title: true,
      rating: true,
      content: true,
      thumbnail: true,
    }),
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
  thumbnail: true,
  created_at: true,
});

const pagingSchema = z.object({
  page: z.number(),
  size: z.number().optional(),
  total_pages: z.number(),
  total_reviews: z.number(),
  order_by: z
    .union([z.literal('created_at'), z.literal('like_count'), z.literal('comment_count')])
    .optional(),
  order: z.union([z.literal('asc'), z.literal('desc')]).optional(),
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

export const editReviewRequestSchema = reviewSchemas
  .pick({
    review_id: true,
    deleted_urls: true,
    uploaded_urls: true,
  })
  .extend({
    body: reviewSchemas.pick({
      title: true,
      content: true,
      rating: true,
      thumbnail: true,
    }),
  });

export const editReviewResponseSchema = reviewSchemas.omit({
  comment_count: true,
  user_id: true,
});

export const deleteReviewRequestSchema = reviewSchemas.pick({ review_id: true });

export const getTravelRouteInfoRequestSchema = reviewSchemas.pick({ travel_route_id: true });

export const getTravelRouteInfoResponseSchema = reviewSchemas.pick({
  user_id: true,
  travel_route: true,
  themes: true,
  regions: true,
});

export const commentSchema = z.object({
  comment_id: z.number(),
  review_id: z.number(),
  user_id: z.string(),
  nickname: z.string(),
  content: z
    .string()
    .min(1, { message: '댓글을 입력해 주세요' })
    .max(255, { message: '255자 내로 작성해 주세요.' }),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  message: z.string(),
});

export const singleCommentSchema = commentSchema.pick({
  user_id: true,
  comment_id: true,
  nickname: true,
  content: true,
  created_at: true,
});

export const getCommentsResponseSchema = singleCommentSchema.array();

export const reviewFormSchema = reviewSchemas.pick({
  title: true,
  rating: true,
  content: true,
});

export const commentFormSchema = commentSchema.pick({
  content: true,
});

const placeInfoSchema = z.object({
  place_id: z.number(),
  name: z.string(),
  latitude: z.number(),
  longitude: z.number(),
});

export const travelRouteInfoSchema = z.object({
  travel_route_id: z.number(),
  user_id: z.string(),
  title: z.string(),
  schedule: z.object({
    breakfast: placeInfoSchema.optional(),
    morning: placeInfoSchema.array().optional(),
    lunch: placeInfoSchema,
    afternoon: placeInfoSchema.array().optional(),
    dinner: placeInfoSchema,
  }),
  config: z.object({
    regions: z.string().array(),
    themes: z.string().array(),
    schedule: z.object({
      breakfast: z.boolean(),
      morning: z.number(),
      lunch: z.boolean(),
      afternoon: z.number(),
      dinner: z.boolean(),
    }),
  }),
  travel_route: z.string().array(),
});

export const socketResponseSchema = reviewSchemas
  .pick({
    user_id: true,
    like_count: true,
    content: true,
  })
  .extend({
    review_id: z.string(),
    is_liked: z.boolean(),
    type: z.union([z.literal('like'), z.literal('comment')]),
    method: z.union([z.literal('POST'), z.literal('PATCH'), z.literal('DELETE')]),
  });

const imageInfoSchema = z.object({
  id: z.number(),
  review_id: z.number(),
  filepath: z.string(),
  source_type: z.string(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export const uploadImageResponseSchema = z.object({
  uploaded_image: imageInfoSchema,
  all_images: imageInfoSchema.array(),
  uploaded_url: z.string(),
});

export const imageUrlSchema = uploadImageResponseSchema.pick({ uploaded_url: true });

export const deleteImageRequestSchema = z.string().array();

export const deleteImageResponseSchema = z.object({
  message: z.string(),
  deleted_files: z.string().array(),
  not_found_files: z.string().array(),
});
