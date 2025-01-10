import React from 'react';
import { DropdownOption, DropdownProps } from './types';
import { DROPDOWN_MENU } from './constants';
import { useRouter } from 'next/navigation';
import { dropdownStyles } from './dropdownStyles';
import useIsMobile from '@/hooks/useIsMobile';
import { useDispatch } from 'react-redux';
import { clearUser } from '@/store/userSlice';
import { destroyCookie, parseCookies } from 'nookies';
import { useLogoutMutation } from '@/api/userApi';
import { useDeleteTravelRouteMutation } from '@/api/travelRouteApi';

const Dropdown: React.FC<DropdownProps> = ({ variant, setIsOpen }) => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const options: DropdownOption[] = DROPDOWN_MENU[variant];
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutMutation();
  const [deleteTravelRoute] = useDeleteTravelRouteMutation();

  const handleSelect = (option: DropdownOption) => {
    if (option.action) {
      switch (option.action) {
        case 'signOut':
          // 로그아웃 로직 구현
          localStorage.removeItem('persist:user');
          localStorage.removeItem('auto_signin');
          dispatch(clearUser());

          logoutUser(
            JSON.stringify({
              access_token: parseCookies().access_token,
              refresh_token: parseCookies().refresh_token,
            }),
          )
            .unwrap()
            .then(res => console.log(res))
            .catch(err => console.log('로그아웃 실패', err));

          destroyCookie(null, 'access_token', { path: '/' });
          destroyCookie(null, 'refresh_token', { path: '/' });

          router.push('/'); // 메인으로 이동
          break;
        case 'deleteTravel':
          // 저장 경로 삭제 로직 구현
          if (option.id) {
            deleteTravelRoute(option.id)
              .unwrap()
              .then(() => {
                console.log(`여행 경로 삭제 성공: ID ${option.id}`);
              })
              .catch(err => console.error('여행 경로 삭제 실패:', err));
          } else {
            console.error('리뷰가 작성 되어있는 일정은 삭제할 수 없습니다');
          }
          break;
        default:
          throw new Error(`Unknown action type: ${option.action}`);
      }
    } else if (option.path) {
      router.push(option.path);
    }

    setIsOpen(false);
  };

  return (
    <div className={dropdownStyles({ variant: isMobile ? 'mobile' : 'default' })}>
      {options.map((option, index) => (
        <div key={`${index}-${option.label}`}>
          <div
            className="h-9 px-4 py-2 text-base text-darkerGray cursor-pointer hover:bg-fadedOrange"
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </div>
          {isMobile && option.separator && <hr className="border-px border-darkGray" />}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
