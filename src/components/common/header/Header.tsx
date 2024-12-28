'use client';

import { usePathname } from 'next/navigation';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import { motion, useScroll, useTransform } from 'motion/react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { INPUT_RANGE } from './logo/constants';

const Header = () => {
  const path: string = usePathname();
  const { scrollYProgress } = useScroll();

  const variant: 'home' | 'common' | 'none' =
    path === '/' ? 'home' : !path.includes('/travel-plan') ? 'common' : 'none';

  const homeHeight = useTransform(scrollYProgress, INPUT_RANGE, ['160px', '80px', '80px']);

  const height = variant === 'home' ? homeHeight : '80px';

  return (
    <header>
      {variant === 'none' ? null : (
        <motion.div
          className={twMerge(
            clsx(variant === 'common' && 'h-20'),
            'fixed z-50 top-0 left-0 w-full bg-background',
          )}
          style={{ height }}
        >
          <Navbar />
          <Logo />
        </motion.div>
      )}
    </header>
  );
};

export default Header;
