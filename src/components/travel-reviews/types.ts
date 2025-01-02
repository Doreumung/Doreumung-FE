import { Dispatch, SetStateAction } from 'react';
import { ChainedCommands, Editor } from '@tiptap/react';
import { LucideIcon } from 'lucide-react';

export type StarRatingProps = {
  rating: number | null;
  setRating: Dispatch<SetStateAction<number | null>>;
};

export type RouteInfoProps = {
  label: '일정' | '경로';
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
