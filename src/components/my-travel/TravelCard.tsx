'use client';

import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import Dropdown from '../common/dropdown/Dropdown';
import { useRouter } from 'next/navigation';

type TravelCardProps = {
  title: string;
  theme: string[];
  region: string[];
  placeArray: string[];
  travel_route_id: number;
};

const TravelCard = ({ title, theme, region, placeArray, travel_route_id }: TravelCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  const handleCardClick = () => {
    if (!isOpen) {
      router.push(`/my-travel/${travel_route_id}`);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col md:flex-row items-center px-4 text-foreground cursor-pointer"
    >
      {/* 이미지 영역 */}
      <div
        className={clsx(
          'flex border border-darkerGray bg-fadedSkyblue p-3 rounded-t-2xl md:rounded-none md:rounded-l-2xl',
          'w-80 h-56 md:w-96 md:h-80',
        )}
      >
        {/* 이미지 */}
      </div>

      {/* 텍스트 영역 */}
      <div
        className={clsx(
          'flex flex-col justify-between border border-t-0 md:border-t md:border-l-0 border-darkerGray bg-white',
          'pl-4 py-3 md:p-5 rounded-b-2xl md:rounded-none md:rounded-r-2xl',
          'w-80 h-80 md:w-96',
        )}
      >
        <div className="flex gap-3 md:gap-6">
          <p className={clsx('w-64 md:w-80', 'text-xl', 'line-clamp-2')}>{title}</p>
          <div className="relative pt-1">
            <Image
              src="/images/myTravelMenu.svg"
              alt="menu image"
              width={28}
              height={28}
              onClick={handleDropdownClick}
              className="cursor-pointer"
            />
            {isOpen && (
              <div className={clsx('absolute pt-2 scale-90 md:scale-100 left-7 md:-left-10')}>
                <Dropdown
                  variant="travelMenu"
                  setIsOpen={setIsOpen}
                  travel_route_id={travel_route_id}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-end gap-3 pr-4">
          {/* 여행 테마 */}
          <div className="flex flex-col gap-2">
            <p className="text-base">여행 테마</p>
            <p className={clsx('text-darkGray', 'text-sm')}>{theme.join(', ')}</p>
          </div>
          {/* 여행 지역 */}
          <div className="flex flex-col gap-2">
            <p className="text-base">여행 지역</p>
            <p className={clsx('text-darkGray', 'text-sm')}>{region.join(' - ')}</p>
          </div>
          {/* 여행 경로 */}
          <div className="flex flex-col gap-2">
            <p className="text-base">여행 경로</p>
            <p className={clsx('text-darkGray', 'text-sm')}>{placeArray.join(' - ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
