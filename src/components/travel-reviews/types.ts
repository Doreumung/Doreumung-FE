import { ChainedCommands, Editor } from '@tiptap/react';
import { LucideIcon } from 'lucide-react';
import { VariantProps } from 'class-variance-authority';
import { routeInfoContainerStyles } from './RouteInfoStyles';
import { reviewStatsIconStyles } from './reviewCard/ReviewStatsStyles';

export type StarRatingProps = {
  value: number;
  onChange?: (value: number | null) => void;
};

export type RouteInfoProps = VariantProps<typeof routeInfoContainerStyles> & {
  label: '일정' | '경로' | '여행 지역' | '여행 경로';
  content: string;
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
};
