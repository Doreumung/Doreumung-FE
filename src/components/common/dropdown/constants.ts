const DROPDOWN_MENUS_USER = [
  { label: '회원정보 수정', path: '/confirm-password' },
  { label: '저장한 경로', path: '/my-travel' },
  { label: '로그아웃', action: 'signOut' },
];

const DROPDOWN_MENUS_TRAVEL = [
  { label: '상세 경로', action: 'seeDetails', path: '/my-travel' },
  { label: '후기 작성', action: 'createReview', path: '/travel-reviews/create' },
  {label: '작성한 후기', action: 'seeMyReview', path: '/travel-reviews/detail'},
  { label: '삭제', action: 'deleteTravel' },
];

const SIGN_IN_AND_SIGN_UP_MENU = [
  { label: '로그인', path: '/sign-in' },
  { label: '회원가입', path: '/sign-up' },
];

const REVIEW_MENU = [{ label: '여행 후기', path: '/travel-reviews', separator: true }];

const MOBILE_DROPDOWN_MENUS = [...REVIEW_MENU, ...SIGN_IN_AND_SIGN_UP_MENU];

const MOBILE_DROPDOWN_MENUS_USER = [...REVIEW_MENU, ...DROPDOWN_MENUS_USER];

export const DROPDOWN_MENU = {
  userMenu: DROPDOWN_MENUS_USER,
  travelMenu: DROPDOWN_MENUS_TRAVEL,
  mobileMenu: MOBILE_DROPDOWN_MENUS,
  mobileUserMenu: MOBILE_DROPDOWN_MENUS_USER,
};
