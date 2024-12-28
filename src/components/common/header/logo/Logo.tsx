'use client';

import { usePathname } from 'next/navigation';
import LogoImage from './LogoImage';
import LogoText from './LogoText';

const Logo = () => {
  const path = usePathname();
  const variant = path === '/' ? 'motion' : 'default';

  return (
    <div className="relative w-full h-full">
      <LogoText variant={variant} />
      <LogoImage variant={variant} />
    </div>
  );
};

export default Logo;
