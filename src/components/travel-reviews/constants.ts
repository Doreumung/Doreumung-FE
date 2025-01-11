import { ToastArgs } from '@/components/common/toast/types';
import { SortCriteria } from './types';

export const COLOR_SWATCHES = [
  '#FBD6B0',
  '#F8EAC1',
  '#DBEBCC',
  '#D1E6F1',
  '#CF3F2F',
  '#FF9B36',
  '#FBC114',
  '#98DA5B',
  '#95C9E7',
  '#0E72D5',
  '#151515',
  '#404040',
  '#6D6D6D',
  '#9C9C9C',
  '#CECECE',
  '#EFEFEF',
  '#FFFFFF',
] as const;

export const TOOLBAR_OUTER_CONTAINER_STYLES =
  'sticky top-16 z-10 w-full bg-background md:top-20' as const;

export const TOOLBAR_INNER_CONTAINER_STYLES =
  'flex justify-between items-center px-5 h-12 border border-green rounded-t-2xl bg-white' as const;

export const TOOLBAR_GROUP_STYLES = 'flex items-center gap-2' as const;

export const COLOR_SWATCH_STYLES = 'duration-75 ease-in-out hover:scale-110 bg-white' as const;

export const INFO_CONTAINER_STYLES =
  'flex flex-col items-start gap-1 text-darkerGray md:flex-row md:items-center md:gap-4' as const;

export const LABEL_STYLES = 'shrink-0 pl-2 md:pl-0';

export const POST_REVIEW_SUCCESS_MESSAGE: ToastArgs = {
  message: ['후기가 성공적으로 등록되었습니다!'],
};

export const POST_REVIEW_ERROR_MESSAGE: ToastArgs = {
  message: ['후기 등록에 실패하였습니다.', '잠시 후 다시 시도해 주세요.'],
  type: 'error',
};

export const EDIT_REVIEW_SUCCESS_MESSAGE: ToastArgs = {
  message: ['후기가 성공적으로 수정되었습니다!'],
};

export const EDIT_REVIEW_ERROR_MESSAGE: ToastArgs = {
  message: ['후기 수정에 실패하였습니다.', '잠시 후 다시 시도해 주세요.'],
  type: 'error',
};

export const DELETE_REVIEW_SUCCESS_MESSAGE: ToastArgs = {
  message: ['후기가 성공적으로 삭제되었습니다!'],
};

export const DELETE_REVIEW_ERROR_MESSAGE: ToastArgs = {
  message: ['후기 삭제에 실패하였습니다.', '잠시 후 다시 시도해 주세요.'],
  type: 'error',
};

export const SOCKET_ERROR_MESSAGE: ToastArgs = {
  message: ['오류가 발생하였습니다.', '잠시 후 다시 시도해 주세요.'],
  type: 'error',
};

export const LIKE_MY_OWN_REVIEW_ERROR_MESSAGE: ToastArgs = {
  message: ['자신의 후기에 좋아요를 누를 수 없습니다.'],
  type: 'error',
};

export const POST_COMMENT_SUCCESS_MESSAGE: ToastArgs = {
  message: ['댓글이 성공적으로 등록되었습니다!'],
};

export const POST_COMMENT_ERROR_MESSAGE: ToastArgs = {
  message: ['댓글 등록에 실패하였습니다.', '잠시 후 다시 시도해 주세요.'],
  type: 'error',
};

export const EDIT_COMMENT_SUCCESS_MESSAGE: ToastArgs = {
  message: ['댓글이 성공적으로 수정되었습니다!'],
};

export const EDIT_COMMENT_ERROR_MESSAGE: ToastArgs = {
  message: ['댓글 수정에 실패하였습니다.', '잠시 후 다시 시도해 주세요.'],
  type: 'error',
};

export const DELETE_COMMENT_SUCCESS_MESSAGE: ToastArgs = {
  message: ['댓글이 성공적으로 삭제되었습니다!'],
};

export const DELETE_COMMENT_ERROR_MESSAGE: ToastArgs = {
  message: ['댓글 삭제에 실패하였습니다.', '잠시 후 다시 시도해 주세요.'],
  type: 'error',
};

export const SORTING_OPTIONS: SortCriteria[] = ['created_at', 'like_count'];

export const LABELS_BY_SORTING_OPTIONS = {
  created_at: '날짜',
  like_count: '좋아요',
};
