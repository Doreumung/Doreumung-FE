'use client';

import Button from '@/components/common/buttons/Button';

import useIsMobile from '@/hooks/useIsMobile';
import useScrollBackgroundColor from '@/hooks/useScrollBackgroundColor';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const Home = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef);
  const { scrollYProgress } = useScroll();
  const paddingTop = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isMobile ? '112px' : '160px', '0px', '0px'],
  );

  useScrollBackgroundColor([237, 237, 237], [208, 229, 241], 1000);

  return (
    <div className="w-full min-h-screen -mt-16 md:-mt-20">
      <motion.div
        className="flex flex-col items-center w-full h-screen md:flex-row md:justify-between md:items-end"
        style={{ paddingTop }}
      >
        <div className="w-full h-full text-center content-center md:w-3/4">도르멍 이용 방법</div>
        <div className="flex justify-center self-end w-full pb-20 md:w-1/4 ">
          <Button
            size={isMobile ? 'md' : 'lg'}
            color="green"
            label="일정 생성하기"
            shadow="dropShadow"
            onClick={() => router.push('/travel-plan')}
          />
        </div>
      </motion.div>

      <div className="h-96" />

      <div ref={containerRef} className="flex flex-col items-center gap-20 w-full min-h-screen">
        <div
          className="relative"
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
          }}
        >
          <div
            className="absolute -bottom-20 -left-28 -z-10 w-72 h-32 bg-smallCloud bg-cover bg-center opacity-75"
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              transition: 'all 1.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
            }}
          />
          <p className="text-2xl">도르멍 이용 후기</p>
        </div>
        <div className="w-full max-w-lg h-80 text-center content-center">후기 미리 보기</div>
      </div>
    </div>
  );
};

export default Home;
