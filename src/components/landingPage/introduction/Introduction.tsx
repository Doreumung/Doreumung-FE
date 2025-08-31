import Button from '@/components/common/buttons/Button';
import useIsMobile from '@/hooks/useIsMobile';
import previewPoster from '@public/images/previewPoster.png';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Introduction = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  const [isLoaded, setIsLoaded] = useState(false);

  const marginTop = useTransform(scrollYProgress, [0, 0.3], [isMobile ? '48px' : '80px', '0px']);

  const minHeight = useTransform(
    scrollYProgress,
    [0, 0.3],
    [
      isMobile ? 'calc(100dvh - 112px)' : 'calc(100dvh - 160px)',
      isMobile ? 'calc(100dvh - 64px)' : 'calc(100dvh - 80px)',
    ],
  );

  return (
    <motion.div
      className="flex flex-col justify-center items-center relative w-full"
      style={{ marginTop, minHeight }}
    >
      <div className="flex flex-col items-center gap-6 w-full md:gap-10">
        <div className="relative w-full max-w-screen-xl aspect-video">
          {!isLoaded && (
            <Image
              src={previewPoster}
              alt="서비스 프리뷰"
              fill
              sizes="100%"
              style={{ objectFit: 'contain' }}
              priority
            />
          )}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setIsLoaded(true)}
            className="border border-darkerGray rounded-2xl shadow-xl"
          >
            <source src="/videos/preview.webm" type="video/webm" />
            <source src="/videos/preview.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex justify-center">
          <Button
            size={isMobile ? 'sm' : 'lg'}
            color="green"
            label="일정 생성하기"
            shadow="dropShadow"
            className="w-36 md:w-80"
            onClick={() => router.push('/travel-plan')}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Introduction;
