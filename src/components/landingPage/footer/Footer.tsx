'use client';

import { usePathname } from 'next/navigation';
import { footerStyles } from './footerStyles';
import CompanyInfo from './CompanyInfo';
import FollowUs from './FollowUs';
import { motion } from 'motion/react';
import useIsMobile from '@/hooks/useIsMobile';

const FOOTER_HIDDEN_PATHS = ['/sign', '/travel-plan', '/not-found', '/redirect'];

const Footer = () => {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const display = FOOTER_HIDDEN_PATHS.some(path => pathname.startsWith(path)) ? 'hidden' : 'block';
  const isLandingPage = pathname === '/';

  return (
    <footer className={footerStyles({ display, isLandingPage })}>
      <motion.div
        animate={{
          translateX: '150%',
          rotate: 360,
        }}
        transition={{
          duration: isMobile ? 4 : 5,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        className="flex absolute bottom-0 left-1/2 size-24 bg-dolmung bg-center bg-cover md:size-36"
      />

      <div className="flex flex-col w-full h-full md:w-3/5 md:max-w-6xl z-10">
        <div className="grow w-full">
          <div className="flex flex-col w-full md:flex-row md:justify-between">
            <div className="w-full md:min-w-1/3">
              <div className="w-20 h-8 bg-doreumung bg-contain bg-center bg-no-repeat" />
              <p className="pt-2">제주에서 만나는 뜻밖의 하루</p>
            </div>
            <FollowUs />
          </div>
          <CompanyInfo />
        </div>
        <p className="text-sm text-darkGray tracking-tight">© 2025 도르멍. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
