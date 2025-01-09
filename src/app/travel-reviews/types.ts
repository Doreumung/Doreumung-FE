import { z } from 'zod';
import {
  cancelLikeReviewResponseSchema,
  deleteCommentResponseSchema,
  deleteReviewRequestSchema,
  deleteReviewResponseSchema,
  editCommentRequestSchema,
  editCommentResponseSchema,
  editReviewRequestSchema,
  editReviewResponseSchema,
  getCommentsResponseSchema,
  getReviewDetailResponseSchema,
  getReviewListRequestSchema,
  getReviewListResponseSchema,
  getTravelRouteInfoResponseSchema,
  getTravelRouteInfoRequestSchema,
  likeReviewResponseSchema,
  postCommentRequestSchema,
  postCommentResponseSchema,
  postReviewRequestSchema,
  postReviewResponseSchema,
  singleReviewSchema,
  commentSchema,
  reviewFormSchema,
  commentFormSchema,
  deleteCommentRequestSchema,
  travelRouteInfoSchema,
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

export type DeleteReviewResponseType = z.infer<typeof deleteReviewResponseSchema>;

export type LikeReviewResponseType = z.infer<typeof likeReviewResponseSchema>;

export type CancelLikeReviewResponseType = z.infer<typeof cancelLikeReviewResponseSchema>;

export type GetTravelRouteInfoRequestType = z.infer<typeof getTravelRouteInfoRequestSchema>;

export type GetTravelRouteInfoResponseType = z.infer<typeof getTravelRouteInfoResponseSchema>;

export type CommentType = z.infer<typeof commentSchema>;

export type PostCommentRequestType = z.infer<typeof postCommentRequestSchema>;

export type PostCommentResponseType = z.infer<typeof postCommentResponseSchema>;

export type GetCommentsResponseType = z.infer<typeof getCommentsResponseSchema>;

export type EditCommentRequestType = z.infer<typeof editCommentRequestSchema>;

export type EditCommentResponseType = z.infer<typeof editCommentResponseSchema>;

export type DeleteCommentRequestType = z.infer<typeof deleteCommentRequestSchema>;

export type DeleteCommentResponseType = z.infer<typeof deleteCommentResponseSchema>;

export type ReviewFormType = z.infer<typeof reviewFormSchema>;

export type CommentFormType = z.infer<typeof commentFormSchema>;

export type TravelRouteInfoType = z.infer<typeof travelRouteInfoSchema>;
