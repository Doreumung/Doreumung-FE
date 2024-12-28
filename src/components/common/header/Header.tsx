'use client';

import { usePathname } from 'next/navigation';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import { headerStyles } from './headerStyles';

const Header = () => {
  const path: string = usePathname();
  const variant: 'home' | 'common' | 'none' =
    path === '/' ? 'home' : !path.includes('/travel-plan') ? 'common' : 'none';

  return (
    <div className={headerStyles({ variant })}>
      <Navbar />
      <Logo variant={variant} />
    </div>
  );
};

export default Header;
