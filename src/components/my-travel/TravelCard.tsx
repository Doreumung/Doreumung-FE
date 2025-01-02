'use client';

import Image from 'next/image';
import { useState } from 'react';
import Dropdown from '../common/dropdown/Dropdown';

type TravelCardProps = {
  nickname: string;
  title: string;
  rating: number;
  like_count: number;
};

const TravelCard = ({ nickname, title, rating, like_count }: TravelCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-end items-start w-[300px] h-[300px] p-3 border border-green rounded-t-lg bg-fadedSkyblue">
        {/* 이미지 */}
        <Image
          src="/images/menu-dots.svg"
          alt="chat image"
          width={20}
          height={20}
          onClick={() => setIsOpen(prev => !prev)}
        />
        {isOpen && <Dropdown variant="travelMenu" setIsOpen={setIsOpen} />}
      </div>
      <div className="flex flex-col justify-between p-3 w-[300px] h-[150px] border border-red rounded-b-lg">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <Image src="/images/star.svg" alt="chat image" width={18} height={18} />
            <p className="text-sm">{rating}</p>
          </div>
          <p className="text-xl">{title}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <Image src="/images/chat.svg" alt="chat image" width={18} height={18} />
              <p className="text-sm">10</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src="/images/filled-heart.svg"
                alt="chat image"
                width={16}
                height={16}
                className="pb-1"
              />
              <p className="text-sm">{like_count}</p>
            </div>
          </div>
          <p className="text-sm">{nickname}</p>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
