import { motion } from 'motion/react';
import Image from 'next/image';
import SadDolmung from '@public/images/sadDolmung.svg';

const ApiErrorMessage = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        animate={{
          rotate: 30,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        <Image src={SadDolmung} alt="sadDolmung" width={50} priority />
      </motion.div>
      <p className="text-red text-center">
        오류가 발생하였습니다.
        <br />
        잠시 후 다시 시도해 주세요.
      </p>
    </div>
  );
};

export default ApiErrorMessage;
