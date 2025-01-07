export const REDIRECT_TITLE = {
  SIGNED_IN: '잘못된 접근입니다.',
  NOT_SIGNED_IN: '로그인이 필요합니다.',
  NOT_FOUND: '페이지를 찾을 수 없습니다.',
} as const;

export const REDIRECT_MESSAGE = {
  SIGNED_IN: '이미 로그인된 회원은 이용할 수 없는 페이지입니다.',
  NOT_SIGNED_IN: '로그인 후 다시 시도해 주세요.',
  NOT_FOUND: '요청하신 페이지는 존재하지 않거나 삭제되었습니다.',
} as const;

export const REDIRECT_TO = {
  SIGNED_IN: '이전',
  NOT_SIGNED_IN: '로그인',
  NOT_FOUND: '홈',
} as const;
