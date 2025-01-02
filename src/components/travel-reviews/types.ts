import { Dispatch, SetStateAction } from 'react';
import { ChainedCommands, Editor } from '@tiptap/react';
import { LucideIcon } from 'lucide-react';
import { VariantProps } from 'class-variance-authority';
import { routeInfoContainerStyles } from './RouteInfoStyles';

export type StarRatingProps = {
  rating: number | null;
  setRating: Dispatch<SetStateAction<number | null>>;
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
};

export type ColorSwatchesProps = { type: string; onClick: () => ChainedCommands };

export type ReviewStatsProps = {
  stats: string | number;
  color: 'yellow' | 'fadedGreen' | 'fadedOrange';
  icon: LucideIcon;
  className?: string;
};
