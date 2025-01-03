import { z } from 'zod';
import {
  cancelLikeReviewResponseSchema,
  deleteCommentResponseSchema,
  deleteReviewResponseSchema,
  editCommentRequestSchema,
  editCommentResponseSchema,
  editReviewRequestSchema,
  editReviewResponseSchema,
  getCommentsResponseSchema,
  getReviewResponseSchema,
  getReviewListResponseSchema,
  likeReviewResponseSchema,
  postCommentRequestSchema,
  postCommentResponseSchema,
  postReviewRequestSchema,
  postReviewResponseSchema,
  reviewInReviewListSchema,
  commentSchema,
  reviewFormSchema,
  commentFormSchema,
} from './schemas';

export type GetReviewResponseType = z.infer<typeof getReviewResponseSchema>;

export type PostReviewRequestType = z.infer<typeof postReviewRequestSchema>;

export type PostReviewResponseType = z.infer<typeof postReviewResponseSchema>;

export type ReviewInReviewListType = z.infer<typeof reviewInReviewListSchema>;

export type GetReviewListResponseType = z.infer<typeof getReviewListResponseSchema>;

export type EditReviewRequestType = z.infer<typeof editReviewRequestSchema>;

export type EditReviewResponseType = z.infer<typeof editReviewResponseSchema>;

export type DeleteReviewResponseType = z.infer<typeof deleteReviewResponseSchema>;

export type LikeReviewResponseType = z.infer<typeof likeReviewResponseSchema>;

export type CancelLikeReviewResponseType = z.infer<typeof cancelLikeReviewResponseSchema>;

export type CommentType = z.infer<typeof commentSchema>;

export type PostCommentRequestType = z.infer<typeof postCommentRequestSchema>;

export type PostCommentResponseType = z.infer<typeof postCommentResponseSchema>;

export type GetCommentsResponseType = z.infer<typeof getCommentsResponseSchema>;

export type EditCommentRequestType = z.infer<typeof editCommentRequestSchema>;

export type EditCommentResponseType = z.infer<typeof editCommentResponseSchema>;

export type DeleteCommentResponseType = z.infer<typeof deleteCommentResponseSchema>;

export type ReviewFormType = z.infer<typeof reviewFormSchema>;

export type CommentFormType = z.infer<typeof commentFormSchema>;
