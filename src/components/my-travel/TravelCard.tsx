'use client';

import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import Dropdown from '../common/dropdown/Dropdown';
import { useRouter } from 'next/navigation';
import { useDeleteTravelRouteMutation } from '@/api/travelRouteApi';
import { toast } from '../common/toast/Toast';
import LayerPopup from '../common/layerPopup/LayerPopup';

type TravelCardProps = {
  title: string;
  theme: string[];
  region: string[];
  placeArray: string[];
  travel_route_id: number;
};

const TravelCard = ({ title, theme, region, placeArray, travel_route_id }: TravelCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const router = useRouter();
  const [deleteTravelRoute] = useDeleteTravelRouteMutation();

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

  const handleDeleteConfirm = () => {
    setShowDeleteConfirm(true);
  };

  const handleDelete = () => {
    if (travel_route_id) {
      deleteTravelRoute(travel_route_id)
        .unwrap()
        .then(() => {
          console.log(`여행 경로 삭제 성공: ID ${travel_route_id}`);
          toast({ message: ['일정이 성공적으로 삭제되었습니다.'] });
        })
        .catch(() => {
          toast({ message: ['후기가 작성된 일정은 삭제할 수 없습니다.'], type: 'error' });
        });
    }
    setShowDeleteConfirm(false);
  };

  return (
    <>
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
                    onDeleteConfirm={handleDeleteConfirm}
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
      {showDeleteConfirm && (
        <LayerPopup
          label="정말로 삭제하시겠습니까?"
          type="confirm"
          onConfirm={handleDelete}
          setShowLayerPopup={setShowDeleteConfirm}
        />
      )}
    </>
  );
};

export default TravelCard;
