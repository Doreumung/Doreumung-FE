'use client';

import { usePathname, useRouter } from 'next/navigation';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import { motion, useMotionValue, useScroll, useTransform } from 'motion/react';
import clsx from 'clsx';
import { HEADER_HEIGHT, HEADER_HIDDEN_PATHS, INPUT_RANGE } from './constants';
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect } from 'react';
import LayerPopup from '../layerPopup/LayerPopup';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { checkPath, hidePopup } from '@/store/navigationSlice';

const Header = () => {
  const isMobile = useIsMobile();
  const pathname: string = usePathname();
  const router = useRouter();

  const { scrollYProgress } = useScroll();
  const deviceType = isMobile ? 'mobile' : 'web';

  const dispatch = useAppDispatch();
  const { showNavigationPopup, navigationPath } = useAppSelector(
    (state: RootState) => state.navigation,
  );

  useEffect(() => {

    dispatch(checkPath(pathname));
  },[pathname])

  const variant: 'home' | 'common' | 'travelPlan' =
    pathname === '/' ? 'home' : !pathname.includes('/travel-plan') ? 'common' : 'travelPlan';

  const shouldBeHidden = HEADER_HIDDEN_PATHS.some(path => pathname.startsWith(path));

  const handleNavigationConfirm = () => {
    dispatch(hidePopup());
    if (navigationPath) router.push(navigationPath);
  };

  const handleNavigationCancel = () => {
    dispatch(hidePopup());
  };

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
        shouldBeHidden && 'hidden',
      )}
    >
      <motion.div style={{ height }}>
        <Logo />
        <Navbar />
      </motion.div>
      {showNavigationPopup && (
        <LayerPopup
          type="confirm"
          label={
            <>
              {pathname.startsWith('/travel-reviews/create') ? '작성' : '수정'} 중인 후기가 저장되지
              않았습니다.
              <br /> 정말 페이지를 떠나시겠습니까?
            </>
          }
          onConfirm={handleNavigationConfirm}
          setShowLayerPopup={handleNavigationCancel}
        />
      )}
    </header>
  );
};

export default Header;
