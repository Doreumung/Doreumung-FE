export const REDIRECT_TITLE = {
  SIGNED_IN: '잘못된 접근입니다.',
  NOT_SIGNED_IN: '로그인이 필요합니다.',
  UNAUTHORIZED: '접근 권한이 없습니다.',
  NOT_FOUND: '페이지를 찾을 수 없습니다.',
} as const;

export const REDIRECT_MESSAGE = {
  SIGNED_IN: '이미 로그인된 회원은 이용할 수 없는 페이지입니다.',
  NOT_SIGNED_IN: '로그인 후 다시 시도해 주세요.',
  UNAUTHORIZED: '이 페이지는 권한이 필요한 페이지입니다.',
  NOT_FOUND: '요청하신 페이지는 존재하지 않거나 삭제되었습니다.',
} as const;

export const REDIRECT_TO = {
  SIGNED_IN: '이전',
  NOT_SIGNED_IN: '로그인',
  UNAUTHORIZED: '후기 목록',
  NOT_FOUND: '홈',
} as const;
