import { useState } from 'react';
import { destroyCookie, setCookie } from 'nookies';
import { clearUser } from '@/store/userSlice';
import { useDispatch } from 'react-redux';
import { useAccessTokenRefreshMutation } from '@/api/userApi';
import { usePathname, useRouter } from 'next/navigation';
import { setCookieWithExpiry } from '@/app/sign-in/setCookieWithExpiry';

export const useCheckLoginStatus = () => {
  const [accessTokenRefresh] = useAccessTokenRefreshMutation();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // 로그인 상태 관리
  const router = useRouter();
  const pathName = usePathname();

  const refreshAccessToken = async (refreshToken: string) => {
    try {
      const result = await accessTokenRefresh(
        JSON.stringify({ refresh_token: refreshToken }),
      ).unwrap();

      setCookieWithExpiry('access_token', result?.access_token, 24 * 60 * 60);

      setIsLoggedIn(true); // 로그인 상태로 변경
    } catch (err) {
      console.error('액세스 토큰 재발급 실패:', err);
      handleLogout('로그인이 만료되었습니다.');
    }
  };

  const handleLogout = (message: string) => {
    console.log(message);

    localStorage.removeItem('persist:user');
    localStorage.removeItem('auto_signin');
    localStorage.removeItem('access_token_expiry');
    localStorage.removeItem('refresh_token_expiry');
    localStorage.removeItem('logout_time_expiry');

    dispatch(clearUser());

    destroyCookie(null, 'access_token', { path: '/' });
    destroyCookie(null, 'refresh_token', { path: '/' });

    setIsLoggedIn(false); // 로그아웃 상태로 변경

    if (
      pathName === '/edit-profile' ||
      pathName === '/confirm-password' ||
      pathName === '/my-travel'
    ) {
      setCookie(null, 'redirectMode', 'NOT_SIGNED_IN');
      router.push('/redirect');
    }
  };

  return { isLoggedIn, setIsLoggedIn, refreshAccessToken, handleLogout };
};
