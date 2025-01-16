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

  const paddingTop = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isMobile ? '112px' : '160px', '0px', '0px'],
  );

  return (
    <motion.div
      className="flex flex-col items-center gap-6 w-full min-h-96 md:h-screen"
      style={{ paddingTop }}
    >
      <div className="flex justify-center items-center relative w-full aspect-square md:h-full md:aspect-auto mt-10">
        <Image
          src={preview}
          fill
          sizes="100%"
          style={{ objectFit: 'contain' }}
          alt="일정 생성 미리보기"
        />
      </div>
      <div className="flex justify-center self-end w-full pb-20">
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
