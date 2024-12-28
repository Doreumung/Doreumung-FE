'use client';

import Dolmung from '@public/images/dolmung.svg';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { LogoTextAndImageProps } from './types';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { INPUT_RANGE } from './constants';

const LogoImage: React.FC<LogoTextAndImageProps> = ({ variant }) => {
  const { scrollYProgress } = useScroll();

  const motionWidth = useTransform(scrollYProgress, INPUT_RANGE, ['56px', '48px', '48px']);
  const motionLeft = useTransform(scrollYProgress, INPUT_RANGE, ['217px', '160px', '160px']);
  const motionBottom = useTransform(scrollYProgress, INPUT_RANGE, ['55px', '12px', '12px']);

  const width = variant === 'motion' ? motionWidth : '48px';
  const left = variant === 'motion' ? motionLeft : '160px';
  const bottom = variant === 'motion' ? motionBottom : '12px';

  return (
    <>
      <motion.div
        className={twMerge(clsx(variant === 'default' && 'w-12 bottom-3 left-40'), 'absolute')}
        style={{ width, left, bottom }}
      >
        <Image src={Dolmung} alt="dolmung" />
      </motion.div>
    </>
  );
};

export default LogoImage;
