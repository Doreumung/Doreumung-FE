'use client';

import Button from '@/components/common/buttons/Button';
import useIsMobile from '@/hooks/useIsMobile';
import SadDolmung from '@public/images/sadDolmung.svg';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

const NotFound = () => {
  const isMobile = useIsMobile();
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
          <Image src={SadDolmung} alt="sadDolmung" width={isMobile ? 100 : 150} />
        </motion.div>
        <div className="flex flex-col gap-2 text-center tracking-tight">
          <h1 className="text-2xl sm:text-3xl font-bold text-red">페이지를 찾을 수 없습니다!</h1>
          <p className="text-base sm:text-lg">요청하신 페이지는 존재하지 않거나 삭제되었습니다.</p>
        </div>
        <Link href="/">
          <Button
            label="홈으로 돌아가기"
            color="orange"
            size={isMobile ? 'sm' : 'md'}
            shadow="dropShadow"
            className="w-full px-3 py-1 mt-6"
          />
        </Link>
      </div>
    </>
  );
};

export default NotFound;
