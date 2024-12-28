import DoreumungLogo from '@public/images/logo.svg';
import Dolmung from '@public/images/dolmung.svg';
import Image from 'next/image';
import { dolmungStyles, logoContainerStyles, logoStyles } from './logoStyles';
import { LogoVariants } from './types';
import Link from 'next/link';

const Logo: React.FC<LogoVariants> = ({ variant }) => {
  return (
    <>
      <Link href="/" className={logoContainerStyles({ variant })}>
        <Image src={DoreumungLogo} alt="logo" className={logoStyles({ variant })} />
        <Image src={Dolmung} alt="dolmung" className={dolmungStyles({ variant })} />
      </Link>
    </>
  );
};

export default Logo;
