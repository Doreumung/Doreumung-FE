export const DROPDOWN_MENUS_USER = [
  { label: '회원정보 수정', path: '/edit-profile' },
  { label: '저장한 경로', path: '/my-travel' },
  { label: '로그아웃', action: 'signOut' },
] as const;

export const DROPDOWN_MENUS_TRAVEL = [
  { label: '리뷰 작성', path: '/travel-review/create' },
  { label: '삭제', action: 'deleteTravel' },
] as const;
