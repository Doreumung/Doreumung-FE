'use client';

import DoreumungLogo from '@public/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { motion, MotionValue, useMotionValue, useScroll, useTransform } from 'motion/react';
import { LogoTextAndImageProps } from './types';
import { INPUT_RANGE, LOGO_STYLES } from '../constants';
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect } from 'react';

const LogoText: React.FC<LogoTextAndImageProps> = ({ variant }) => {
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();
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

  return (
    <>
      <motion.div style={motionStyle}>
        <Link href="/">
          <Image src={DoreumungLogo} alt="logo" priority />
        </Link>
      </motion.div>
    </>
  );
};

export default LogoText;
