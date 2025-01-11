import { useState } from 'react';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { clearUser } from '@/store/userSlice';
import { useDispatch } from 'react-redux';
import { useAccessTokenRefreshMutation } from '@/api/userApi';

export const useCheckLoginStatus = () => {
  const [accessTokenRefresh] = useAccessTokenRefreshMutation();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // 로그인 상태 관리

  const refreshAccessToken = async (refreshToken: string) => {
    try {
      const result = await accessTokenRefresh(
        JSON.stringify({ refresh_token: refreshToken }),
      ).unwrap();

      setCookie(null, 'access_token', result?.access_token, {
        maxAge: 60 * 60, // 쿠키 유효기간
        path: '/',
      });
    } catch (err) {
      console.error('액세스 토큰 재발급 실패:', err);
      handleLogout('로그인이 만료되었습니다.');
    }
  };

  const handleLogout = (message: string) => {
    console.log(message);

    localStorage.removeItem('persist:user');
    localStorage.removeItem('auto_signin');
    dispatch(clearUser());
    destroyCookie(null, 'access_token', { path: '/' });
    destroyCookie(null, 'refresh_token', { path: '/' });
    setIsLoggedIn(false); // 로그아웃 상태로 변경
  };

  const checkLoginStatus = () => {
    const cookies = parseCookies();
    const accessToken = cookies['access_token'];
    const refreshToken = cookies['refresh_token'];
    const autoSignin = localStorage.getItem('auto_signin');

    if (!isLoggedIn) return; // 로그아웃 상태에서는 실행 중단

    if (autoSignin === 'true' && !accessToken && refreshToken) {
      refreshAccessToken(refreshToken as string);
    } else if (!accessToken && refreshToken) {
      handleLogout('로그인이 만료되었습니다.');
    } else if (!refreshToken) {
      handleLogout('로그인이 만료되었습니다.');
    }
  };

  return { checkLoginStatus };
};
