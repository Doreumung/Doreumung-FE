import { z } from 'zod';
import {
  deleteReviewRequestSchema,
  editReviewRequestSchema,
  editReviewResponseSchema,
  getCommentsResponseSchema,
  getReviewDetailResponseSchema,
  getReviewListRequestSchema,
  getReviewListResponseSchema,
  getTravelRouteInfoResponseSchema,
  getTravelRouteInfoRequestSchema,
  postReviewRequestSchema,
  postReviewResponseSchema,
  singleReviewSchema,
  commentSchema,
  reviewFormSchema,
  commentFormSchema,
  travelRouteInfoSchema,
  singleCommentSchema,
  socketResponseSchema,
} from './schemas';

export type GetReviewDetailResponseType = z.infer<typeof getReviewDetailResponseSchema>;

export type PostReviewRequestType = z.infer<typeof postReviewRequestSchema>;

export type PostReviewResponseType = z.infer<typeof postReviewResponseSchema>;

export type SingleReviewType = z.infer<typeof singleReviewSchema>;

export type GetReviewListRequestType = z.infer<typeof getReviewListRequestSchema>;

export type GetReviewListResponseType = z.infer<typeof getReviewListResponseSchema>;

export type EditReviewRequestType = z.infer<typeof editReviewRequestSchema>;

export type EditReviewResponseType = z.infer<typeof editReviewResponseSchema>;

export type DeleteReviewRequestType = z.infer<typeof deleteReviewRequestSchema>;

export type GetTravelRouteInfoRequestType = z.infer<typeof getTravelRouteInfoRequestSchema>;

export type GetTravelRouteInfoResponseType = z.infer<typeof getTravelRouteInfoResponseSchema>;

export type CommentType = z.infer<typeof commentSchema>;

export type SingleCommentType = z.infer<typeof singleCommentSchema>;

export type GetCommentsResponseType = z.infer<typeof getCommentsResponseSchema>;

export type ReviewFormType = z.infer<typeof reviewFormSchema>;

export type CommentFormType = z.infer<typeof commentFormSchema>;

export type TravelRouteInfoType = z.infer<typeof travelRouteInfoSchema>;

export type SocketResponseType = z.infer<typeof socketResponseSchema>;
