import Button from '@/components/common/buttons/Button';
import useIsMobile from '@/hooks/useIsMobile';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRouter } from 'next/navigation';
import preview from '@public/images/preview.gif';
import Image from 'next/image';

const Introduction = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  const marginTop = useTransform(scrollYProgress, [0, 0.3], [isMobile ? '48px' : '80px', '0px']);

  const height = useTransform(
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
      style={{ marginTop, height }}
    >
      <div className="flex flex-col items-center gap-6 w-full md:gap-10">
        <div className="relative w-full max-w-screen-xl aspect-video">
          <Image
            src={preview}
            fill
            sizes="100%"
            style={{ objectFit: 'contain' }}
            alt="일정 생성 미리보기"
            className="border border-darkerGray shadow-xl"
          />
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
