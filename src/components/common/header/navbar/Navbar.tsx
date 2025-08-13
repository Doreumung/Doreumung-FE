'use client';

import { usePathname, useRouter } from 'next/navigation';
import { navbarStyles } from './NavbarStyles';
import { NAVBAR_MENUS } from './constants';
import { useId, useRef, useState } from 'react';
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
  const userMenuBtnId = useId();
  const userMenuId = useId();
  const userMenuRef = useRef<HTMLButtonElement>(null);
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
        navbarMenus.map((menu, index) => {
          const isUserMenu = menu.label.includes('혼저옵서예!');
          return (
            <div
              key={`${index}-${menu.label}`}
              ref={isUserMenu ? ref : null}
              className="relative cursor-pointer"
            >
              <button
                id={isUserMenu ? userMenuBtnId : undefined}
                ref={isUserMenu ? userMenuRef : null}
                className="text-darkerGray hover:text-logo"
                onClick={() => handleMenuClick(menu)}
                aria-label={isUserMenu ? '사용자 메뉴' : undefined}
                aria-haspopup={isUserMenu ? 'menu' : undefined}
                aria-expanded={isUserMenu ? isOpen : undefined}
                aria-controls={isUserMenu ? userMenuId : undefined}
                onKeyDown={e => {
                  if (isUserMenu && e.key === 'Escape') {
                    setIsOpen(false);
                    userMenuRef.current?.focus();
                  }
                }}
              >
                {menu.label}
              </button>
              {isOpen && isUserMenu && (
                <div id={userMenuId} role="menu" aria-labelledby={userMenuBtnId}>
                  <Dropdown variant="userMenu" setIsOpen={setIsOpen} />
                </div>
              )}
            </div>
          );
        })}

      {isMobile && (
        <div ref={ref} className="relative z-10">
          <button
            aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            aria-haspopup="menu"
            onClick={() => setIsOpen(prev => !prev)}
          >
            <MenuIcon
              aria-hidden="true"
              size={30}
              className="text-darkerGray cursor-pointer hover:text-logo"
            />
          </button>
          {isOpen && (
            <div id="mobile-nav-menu" role="menu">
              <Dropdown variant={mobileDropdownVariant} setIsOpen={setIsOpen} />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
