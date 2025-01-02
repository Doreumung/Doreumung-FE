export const NAVBAR_MENUS = {
  signedOut: [
    { label: '여행 후기', path: '/travel-reviews' },
    { label: '로그인', path: '/sign-in' },
    { label: '회원가입', path: '/sign-up' },
  ],
  signedIn: (username: string) => [
    { label: '여행 후기', path: '/travel-reviews' },
    { label: `${username}님 혼저옵서예!`, action: 'toggleDropdown' },
  ],
} as const;
