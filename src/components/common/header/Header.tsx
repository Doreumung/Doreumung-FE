'use client';

import { usePathname } from 'next/navigation';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import { motion, useMotionValue, useScroll, useTransform } from 'motion/react';
import clsx from 'clsx';
import { HEADER_HEIGHT, INPUT_RANGE } from './constants';
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect } from 'react';

const Header = () => {
  const isMobile = useIsMobile();
  const path: string = usePathname();
  const { scrollYProgress } = useScroll();
  const deviceType = isMobile ? 'mobile' : 'web';

  const variant: 'home' | 'common' | 'travelPlan' =
    path === '/' ? 'home' : !path.includes('/travel-plan') ? 'common' : 'travelPlan';

  const motionHeight = useTransform(scrollYProgress, INPUT_RANGE, [
    HEADER_HEIGHT.motion[deviceType],
    HEADER_HEIGHT.default[deviceType],
    HEADER_HEIGHT.default[deviceType],
  ]);

  const defaultHeight = useMotionValue(HEADER_HEIGHT.default[deviceType]);

  const height = variant === 'home' ? motionHeight : defaultHeight;

  useEffect(() => {
    defaultHeight.set(HEADER_HEIGHT.default[deviceType]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceType]);

  return (
    <header className={clsx(variant === 'travelPlan' && 'hidden')}>
      <motion.div className="fixed z-30 top-0 left-0 w-full bg-background" style={{ height }}>
        <Navbar />
        <Logo />
      </motion.div>
    </header>
  );
};

export default Header;
