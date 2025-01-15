'use client';

import { usePathname } from 'next/navigation';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import { motion, useMotionValue, useScroll, useTransform } from 'motion/react';
import clsx from 'clsx';
import { HEADER_HEIGHT, INPUT_RANGE } from './constants';
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect } from 'react';

const HEADER_HIDDEN_PATHS = ['/my-travel/'];

const Header = () => {
  const isMobile = useIsMobile();
  const pathname: string = usePathname();
  const { scrollYProgress } = useScroll();
  const deviceType = isMobile ? 'mobile' : 'web';

  const variant: 'home' | 'common' | 'travelPlan' =
    pathname === '/' ? 'home' : !pathname.includes('/travel-plan') ? 'common' : 'travelPlan';

  const isHidden = HEADER_HIDDEN_PATHS.some(path => pathname.startsWith(path));

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
    <header
      className={clsx(
        variant === 'travelPlan' && 'hidden',
        'fixed z-30 top-0 left-0 w-full bg-background',
        'header',
        isHidden && 'hidden',
      )}
    >
      <motion.div style={{ height }}>
        <Logo />
        <Navbar />
      </motion.div>
    </header>
  );
};

export default Header;
