'use client';

import { useRouter } from 'next/navigation';
import useIsMobile from '@/hooks/useIsMobile';
import SadDolmung from '@public/images/sadDolmung.svg';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { REDIRECT_TITLE, REDIRECT_MESSAGE, REDIRECT_TO } from './constants';
import { RedirectNoticeProps } from './types';
import Button from '../buttons/Button';
import { destroyCookie } from 'nookies';

const RedirectNotice = ({ mode = 'NOT_FOUND' }: RedirectNoticeProps) => {
  const isMobile = useIsMobile();
  const [seconds, setSeconds] = useState(5);
  const router = useRouter();

  destroyCookie(null, 'redirectMode');

  const redirect = useCallback(() => {
    if (mode === 'SIGNED_IN') router.back();
    else if (mode === 'NOT_SIGNED_IN') router.push('/sign-in');
    else if (mode === 'UNAUTHORIZED') router.push('/travel-reviews');
    else router.push('/');
  }, [mode, router]);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(prev => (prev === 0 ? prev : prev - 1)), 1000);
    setTimeout(() => redirect(), 5000);

    return () => {
      clearInterval(timer);
    };
  }, [redirect]);

  return (
    <>
      <div className="absolute top-0 left-0 z-40 h-screen w-screen bg-background" />
      <div className="flex flex-col items-center gap-5 relative top-10 z-50">
        <motion.div
          animate={{
            rotate: 30,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          <Image src={SadDolmung} alt="sadDolmung" width={isMobile ? 100 : 150} priority />
        </motion.div>

        <div className="flex flex-col gap-2 text-center tracking-tight">
          <h1 className="mb-4 text-2xl sm:text-3xl font-bold text-red">{REDIRECT_TITLE[mode]}</h1>
          <p className="text-base sm:text-lg">{REDIRECT_MESSAGE[mode]}</p>
          <p className="text-base sm:text-lg">
            {seconds}초 후 {REDIRECT_TO[mode]} 화면으로 이동합니다.
          </p>
        </div>
        <div>
          <Button
            label="바로 가기"
            color="orange"
            size={isMobile ? 'sm' : 'md'}
            shadow="dropShadow"
            className="w-full px-3 py-1 mt-4"
            onClick={() => redirect()}
          />
        </div>
      </div>
    </>
  );
};

export default RedirectNotice;
