'use client';

import Button from '@/components/common/buttons/Button';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const router = useRouter();
  const paddingTop = useTransform(scrollYProgress, [0, 0.5, 1], ['80px', '0px', '0px']);

  return (
    <motion.div className="flex flex-col gap-28" style={{ paddingTop }}>
      <section className="flex justify-between h-[900px]">
        <div className="w-3/4 h-full">{/* 서비스 사용 방법 gif 이미지 삽입 공간*/}</div>
        <div className="flex justify-center self-end w-1/4 pb-5">
          <Button
            size="lg"
            color="green"
            label="일정 생성하기"
            shadow="dropShadow"
            onClick={() => router.push('/travel-plan')}
          />
        </div>
      </section>
      {/* 여행 후기 리스트 레이아웃 확인용 코드*/}
      <section>
        <div className="w-80 h-[450px] border border-darkerGray rounded-2xl bg-white"></div>
        <div className="w-80 h-[450px] border border-darkerGray rounded-2xl bg-white"></div>
        <div className="w-80 h-[450px] border border-darkerGray rounded-2xl bg-white"></div>
      </section>
    </motion.div>
  );
};

export default Home;
