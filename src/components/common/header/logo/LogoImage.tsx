'use client';

import Dolmung from '@public/images/dolmung.svg';
import Image from 'next/image';
import { motion, MotionValue, useMotionValue, useScroll, useTransform } from 'motion/react';
import { LogoTextAndImageProps } from './types';
import { INPUT_RANGE, LOGO_STYLES } from '../constants';
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect } from 'react';

const LogoImage: React.FC<LogoTextAndImageProps> = ({ variant }) => {
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();
  const deviceType = isMobile ? 'mobile' : 'web';

  const motionStyles = LOGO_STYLES.image.motion[deviceType];
  const defaultStyles = LOGO_STYLES.image.default[deviceType];

  const createMotionValue = (
    key: keyof typeof motionStyles,
  ): [MotionValue<number>, number[], string[]] => [
    scrollYProgress,
    INPUT_RANGE,
    [motionStyles[key], defaultStyles[key], defaultStyles[key]],
  ];

  const motionWidth = useTransform(...createMotionValue('width'));
  const motionLeft = useTransform(...createMotionValue('left'));
  const motionBottom = useTransform(...createMotionValue('bottom'));
  const motionTransform = useTransform(...createMotionValue('transform'));
  const defaultWidth = useMotionValue(defaultStyles.width);
  const defaultLeft = useMotionValue(defaultStyles.left);
  const defaultBottom = useMotionValue(defaultStyles.bottom);
  const defaultTransform = useMotionValue(defaultStyles.transform);

  const position = useMotionValue(LOGO_STYLES.position);
  const width = variant === 'motion' ? motionWidth : defaultWidth;
  const left = variant === 'motion' ? motionLeft : defaultLeft;
  const bottom = variant === 'motion' ? motionBottom : defaultBottom;
  const transform = variant === 'motion' ? motionTransform : defaultTransform;

  const motionStyle = { position, width, bottom, left, transform };

  useEffect(() => {
    motionWidth.set(motionStyles.width);
    motionLeft.set(motionStyles.left);
    motionBottom.set(motionStyles.bottom);
    motionTransform.set(motionStyles.transform);
    defaultWidth.set(defaultStyles.width);
    defaultLeft.set(defaultStyles.left);
    defaultBottom.set(defaultStyles.bottom);
    defaultTransform.set(defaultStyles.transform);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceType]);

  return (
    <>
      <motion.div style={motionStyle}>
        <Image src={Dolmung} alt="dolmung" priority />
      </motion.div>
    </>
  );
};

export default LogoImage;
