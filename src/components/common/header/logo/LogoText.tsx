'use client';

import DoreumungLogo from '@public/images/logo.svg';
import Image from 'next/image';
import { motion, MotionValue, useMotionValue, useScroll, useTransform } from 'motion/react';
import { LogoTextAndImageProps } from '../types';
import { INPUT_RANGE, LOGO_STYLES } from '../constants';
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { setNavigationPath, showPopup } from '@/store/navigationSlice';
import { useRouter } from 'next/navigation';

const LogoText: React.FC<LogoTextAndImageProps> = ({ variant }) => {
  const dispatch = useAppDispatch();
  const { isNavigationConfirmationRequired } = useAppSelector(
    (state: RootState) => state.navigation,
  );

  const router = useRouter();

  const { scrollYProgress } = useScroll();

  const isMobile = useIsMobile();
  const deviceType = isMobile ? 'mobile' : 'web';

  const motionStyles = LOGO_STYLES.text.motion[deviceType];
  const defaultStyles = LOGO_STYLES.text.default[deviceType];

  const createMotionValue = (
    key: keyof typeof motionStyles,
  ): [MotionValue<number>, number[], string[]] => [
    scrollYProgress,
    INPUT_RANGE,
    [motionStyles[key], defaultStyles[key], defaultStyles[key]],
  ];

  const motionWidth = useTransform(...createMotionValue('width'));
  const motionMarginLeft = useTransform(...createMotionValue('marginLeft'));
  const defaultWidth = useMotionValue(defaultStyles.width);
  const defaultMarginLeft = useMotionValue(defaultStyles.marginLeft);

  const position = useMotionValue(LOGO_STYLES.position);
  const bottom = useMotionValue(LOGO_STYLES.text.bottom);
  const width = variant === 'motion' ? motionWidth : defaultWidth;
  const marginLeft = variant === 'motion' ? motionMarginLeft : defaultMarginLeft;

  const motionStyle = { position, bottom, width, marginLeft };

  useEffect(() => {
    motionWidth.set(motionStyles.width);
    motionMarginLeft.set(motionStyles.marginLeft);
    defaultWidth.set(defaultStyles.width);
    defaultMarginLeft.set(defaultStyles.marginLeft);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceType]);

  const handleLogoClick = () => {
    if (isNavigationConfirmationRequired) {
      dispatch(setNavigationPath('/'));
      dispatch(showPopup());
    } else router.push('/');
  };

  return (
    <>
      <motion.div style={motionStyle}>
        <button onClick={handleLogoClick} className="flex justify-center items-center">
          <Image src={DoreumungLogo} alt="logo" priority />
        </button>
      </motion.div>
    </>
  );
};

export default LogoText;
