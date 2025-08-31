import { ChainedCommands, Editor } from '@tiptap/react';
import { LucideIcon } from 'lucide-react';
import { VariantProps } from 'class-variance-authority';
import { routeInfoContainerStyles } from './RouteInfoStyles';
import { reviewStatsIconStyles } from './reviewCard/ReviewStatsStyles';
import React, { Dispatch, SetStateAction } from 'react';
import {
  GetCommentsResponseType,
  GetReviewDetailResponseType,
  GetTravelRouteInfoResponseType,
  SingleCommentType,
} from '@/app/travel-reviews/types';

export type StarRatingProps = {
  value: number;
  onChange?: (value: number | null) => void;
};

export type RouteInfoProps = VariantProps<typeof routeInfoContainerStyles> & {
  label: '일정' | '경로' | '평점' | '테마' | '지역';
  content: React.ReactNode;
};

export type TiptapProps = { editor: Editor | null };

export type ToolbarProps = TiptapProps;

export type ToolbarIconProps = {
  icon: LucideIcon;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  roleOverride?: React.AriaRole;
};

export type ColorSwatchesProps = { type: string; onClick: () => ChainedCommands };

export type ReviewStatsProps = VariantProps<typeof reviewStatsIconStyles> & {
  stats: string | number;
  icon: LucideIcon;
  className?: string;
  ariaLabel?: string;
};

export type ReviewFormProps = {
  mode: 'create' | 'edit';
  defaultValues?: { title: string; rating: number; content: string; thumbnail: string | null };
  travelRouteInfo: GetTravelRouteInfoResponseType;
};

export type EditAndDeleteProps = {
  onClickEdit: () => void;
  onClickDelete: () => void;
  className?: string;
};

export type ThumbnailPickerProps = {
  thumbnailImageUrl: string | null;
  setThumbnailImageUrl: Dispatch<SetStateAction<string | null>>;
};

export type CommentFormProps = {
  content?: string;
  setShowForm?: Dispatch<SetStateAction<boolean>>;
  comment_id?: number;
};

export type CommentListProps = { comments: GetCommentsResponseType };

export type CommentItemProps = {
  comment: SingleCommentType;
};

export type ProtectedRouteProps = {
  route: 'create' | 'edit';
  children: (
    travelRouteInfo: GetTravelRouteInfoResponseType,
    reviewDetail?: GetReviewDetailResponseType,
  ) => React.ReactNode;
};

export type SortOrder = 'asc' | 'desc';

export type SortState = {
  created_at: SortOrder;
  like_count: SortOrder;
  comment_count: SortOrder;
};

export type SortCriteria = 'created_at' | 'like_count' | 'comment_count';

export type SortingOptionProps = {
  option: SortCriteria;
};
