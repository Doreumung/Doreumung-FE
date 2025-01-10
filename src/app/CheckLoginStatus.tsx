'use client';

import { useCheckLoginStatus } from '@/utils/auth';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const CheckLoginStatus = () => {
  const { checkLoginStatus } = useCheckLoginStatus();
  const pathname = usePathname(); // 현재 경로 가져오기

  useEffect(() => {
    // 초기 렌더링 시 실행
    checkLoginStatus();

    // 10분 간격으로 확인
    const interval = setInterval(() => {
      checkLoginStatus();
    }, 60); // 10분

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
  }, [checkLoginStatus]);

  useEffect(() => {
    // 경로 변경 시 실행
    checkLoginStatus();
  }, [pathname, checkLoginStatus]);

  return null; // UI 렌더링 없음
};
