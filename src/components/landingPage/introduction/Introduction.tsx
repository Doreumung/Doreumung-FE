import Button from '@/components/common/buttons/Button';
import useIsMobile from '@/hooks/useIsMobile';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRouter } from 'next/navigation';

const Introduction = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  const paddingTop = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isMobile ? '112px' : '160px', '0px', '0px'],
  );

  return (
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
  );
};

export default Introduction;
