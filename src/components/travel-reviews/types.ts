import { ChainedCommands, Editor } from '@tiptap/react';
import { LucideIcon } from 'lucide-react';
import { VariantProps } from 'class-variance-authority';
import { routeInfoContainerStyles } from './RouteInfoStyles';
import { reviewStatsIconStyles } from './reviewCard/ReviewStatsStyles';
import React, { Dispatch, SetStateAction } from 'react';
import { GetTravelRouteInfoResponseType, SingleCommentType } from '@/app/travel-reviews/types';

export type StarRatingProps = {
  value: number;
  onChange?: (value: number | null) => void;
};

export type RouteInfoProps = VariantProps<typeof routeInfoContainerStyles> & {
  label: '일정' | '경로' | '평점' | '테마' | '지역' | '경로';
  content: React.ReactNode;
};

export type TiptapProps = { editor: Editor | null };

export type ToolbarProps = TiptapProps;

export type ToolbarIconProps = {
  icon: LucideIcon;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
};

export type ColorSwatchesProps = { type: string; onClick: () => ChainedCommands };

export type ReviewStatsProps = VariantProps<typeof reviewStatsIconStyles> & {
  stats: string | number;
  icon: LucideIcon;
  className?: string;
};

export type ReviewFormProps = {
  mode: 'create' | 'edit';
  defaultValues?: { title: string; rating: number; content: string; thumbnail: string };
  travelRouteInfo: GetTravelRouteInfoResponseType;
};

export type EditAndDeleteProps = {
  onClickEdit: () => void;
  onClickDelete: () => void;
  className?: string;
};

export type ThumbnailPickerProps = {
  thumbnailImageUrl: string;
  setThumbnailImageUrl: Dispatch<SetStateAction<string>>;
};

export type CommentFormProps = {
  content?: string;
  setShowForm?: Dispatch<SetStateAction<boolean>>;
  comment_id?: number;
};

export type CommentItemProps = {
  comment: SingleCommentType;
};
