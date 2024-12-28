'use client';

import { usePathname, useRouter } from 'next/navigation';
import { navbarStyles } from './NavbarStyles';
import { NAVBAR_MENUS } from './constants';
import { useRef, useState } from 'react';
import { DropdownOption } from '@/components/common/dropdown/types';
import Dropdown from '@/components/common/dropdown/Dropdown';
import useOutsideClick from '@/hooks/useOutsideClick';

const USERNAME = '김돌멍';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const path = usePathname();
  const variant = path.includes('/sign-') ? 'hidden' : 'default';

  useOutsideClick({ ref: ref, callback: () => setIsOpen(false) });

  // 로그인 상태에 따른 분기처리를 위해 로그인 상태를 가져오는 코드 작성 필요
  // 이 때 username도 가져와 동적으로 구현 필요
  const isSignedIn = () => true;

  // isSignedIn 함수 구현 후 필요 시 수정 필요
  // username 가져오면 상수 처리된 USERNAME 대신 가져온 username 사용할 것
  const menus = isSignedIn() ? NAVBAR_MENUS.signedIn(USERNAME) : NAVBAR_MENUS.signedOut;

  const handleMenuClick = (menu: DropdownOption) => {
    if (menu.path) {
      router.push(menu.path);
    } else if (menu.action === 'toggleDropdown') {
      setIsOpen(prev => !prev);
    }
  };

  return (
    <nav className={navbarStyles({ variant })}>
      {menus.map((menu, index) => (
        <div
          key={`${index}-${menu.label}`}
          ref={menu.label.includes('혼저옵서예!') ? ref : null}
          className="relative cursor-pointer"
        >
          <span className="text-darkerGray hover:text-logo" onClick={() => handleMenuClick(menu)}>
            {menu.label}
          </span>
          {isOpen && menu.label.includes('혼저옵서예!') && (
            <Dropdown variant="userMenu" setIsOpen={setIsOpen} />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
