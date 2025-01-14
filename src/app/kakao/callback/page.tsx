'use client';

import { useGetUserInfoMutation, useSendKakaoCodeQuery } from '@/api/userApi';
import { setCookieWithExpiry } from '@/app/sign-in/setCookieWithExpiry';
import LoadingSpinner from '@/components/common/loadingSpinner/LoadingSpinner';
import { setUser } from '@/store/userSlice';
import { useRouter } from 'next/navigation';
// import { parseCookies } from 'nookies';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const KakaoCallback = () => {
  const router = useRouter();
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code'); // 인증 코드 추출
  const dispatch = useDispatch();
  const [getUserInfo] = useGetUserInfoMutation();

  const { data, error, isLoading } = useSendKakaoCodeQuery(code || '');

  useEffect(() => {
    if (!code) {
      router.push('/sign-in'); // 인증 코드가 없으면 로그인 페이지로 이동
    }
  }, [code, router]);

  useEffect(() => {
    if (data) {
      console.log('토큰 정보:', data);

      setCookieWithExpiry('access_token', data?.access_token, 24 * 60 * 60);
      setCookieWithExpiry('refresh_token', data?.refresh_token, 7 * 24 * 60 * 60);

      // 로그인 성공 후 유저 데이터 받아오기
      getUserInfo({})
        .unwrap()
        .then(userData => {
          console.log('유저 정보:', userData);
          dispatch(setUser({ user: userData, loginType: 'kakao' })); // Redux에 유저 정보 저장

          localStorage.setItem('toast_shown', 'false');

          // 홈으로 이동 후 새로고침
          window.location.href = '/'; // 새로고침
        })
        .catch(error => {
          console.error('유저 정보 요청 실패:', error);
          router.push('/sign-in');
        });
    }
    if (error) {
      console.error('카카오 로그인 실패:', error);
      console.log(code);
      router.push('/sign-in'); // 실패 시 다시 로그인 페이지로 이동
    }
  }, [data, error, router, code, dispatch, getUserInfo]);

  if (isLoading) return <LoadingSpinner className="hi" />;

  return <></>;
};

export default KakaoCallback;
