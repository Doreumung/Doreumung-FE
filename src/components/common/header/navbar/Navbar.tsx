'use client';

import { usePathname, useRouter } from 'next/navigation';
import { navbarStyles } from './NavbarStyles';
import { NAVBAR_MENUS } from './constants';
import { useRef, useState } from 'react';
import { DropdownOption } from '@/components/common/dropdown/types';
import Dropdown from '@/components/common/dropdown/Dropdown';
import useOutsideClick from '@/hooks/useOutsideClick';
import useIsMobile from '@/hooks/useIsMobile';
import { MenuIcon } from 'lucide-react';

import { RootState } from '@/store/store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setNavigationPath, showPopup } from '@/store/navigationSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const path = usePathname();
  const isMobile = useIsMobile();
  const variant = path.includes('/sign-') ? 'hidden' : 'default';
  const user = useAppSelector((state: RootState) => state.user.user);
  const { isNavigationConfirmationRequired } = useAppSelector(
    (state: RootState) => state.navigation,
  );
  const dispatch = useAppDispatch();

  useOutsideClick({ ref: ref, callback: () => setIsOpen(false) });

  const navbarMenus = user ? NAVBAR_MENUS.signedIn(user.nickname) : NAVBAR_MENUS.signedOut;
  const mobileDropdownVariant = user ? 'mobileUserMenu' : 'mobileMenu';

  const handleMenuClick = (menu: DropdownOption) => {
    if (menu.path) {
      if (isNavigationConfirmationRequired) {
        dispatch(setNavigationPath(menu.path));
        dispatch(showPopup());
      } else router.push(menu.path);
    } else if (menu.action === 'toggleDropdown') setIsOpen(prev => !prev);
  };

  return (
    <nav className={navbarStyles({ variant })}>
      {!isMobile &&
        navbarMenus.map((menu, index) => (
          <div
            key={`${index}-${menu.label}`}
            ref={menu.label.includes('혼저옵서예!') ? ref : null}
            className="relative cursor-pointer"
          >
            <button
              className="text-darkerGray hover:text-logo"
              onClick={() => handleMenuClick(menu)}
            >
              {menu.label}
            </button>
            {isOpen && menu.label.includes('혼저옵서예!') && (
              <Dropdown variant="userMenu" setIsOpen={setIsOpen} />
            )}
          </div>
        ))}

      {isMobile && (
        <div ref={ref} className="relative z-10">
          <button onClick={() => setIsOpen(prev => !prev)}>
            <MenuIcon size={30} className="text-darkerGray cursor-pointer hover:text-logo" />
          </button>
          {isOpen && <Dropdown variant={mobileDropdownVariant} setIsOpen={setIsOpen} />}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
