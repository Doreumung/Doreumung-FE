'use client';

import DoreumungLogo from '@public/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { LogoTextAndImageProps } from './types';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { INPUT_RANGE } from './constants';

const LogoText: React.FC<LogoTextAndImageProps> = ({ variant }) => {
  const { scrollYProgress } = useScroll();

  const motionWidth = useTransform(scrollYProgress, INPUT_RANGE, ['172px', '128px', '128px']);
  const motionMarginLeft = useTransform(scrollYProgress, INPUT_RANGE, ['56px', '32px', '32px']);

  const width = variant === 'motion' ? motionWidth : '128px';
  const marginLeft = variant === 'motion' ? motionMarginLeft : '32px';

  return (
    <>
      <motion.div
        className={twMerge(clsx(variant === 'default' && 'w-32 ml-8'), 'absolute bottom-2')}
        style={{ width, marginLeft }}
      >
        <Link href="/">
          <Image src={DoreumungLogo} alt="logo" />
        </Link>
      </motion.div>
    </>
  );
};

export default LogoText;
