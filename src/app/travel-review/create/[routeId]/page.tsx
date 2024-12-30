'use client';

import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import Input from '@/components/common/inputs/Input';
import { INFO_CONTAINER_STYLES, LABEL_STYLES, ROUTE_INFO_DUMMY_DATA } from './constants';
import { useState } from 'react';
import StarRating from '@/components/travel-review/StarRatings';
import RouteInfoContainer from '@/components/travel-review/RouteInfo';
// import Button from '@/components/common/buttons/Button';

const Page = () => {
  const [showLayerPopup, setShowLayerPopup] = useState<boolean>(false);
  const [rating, setRating] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowLayerPopup(true);
  };

  // 제출 버튼 클릭 시 후기 등록 요청 필요

  return (
    <div className="flex flex-col items-center w-full">
      <BackNavigation to="reviewList" />

      <h3 className="block py-12 text-darkerGray text-3xl">후기 작성</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-4 noValidate">
        <div className={INFO_CONTAINER_STYLES}>
          <span className={LABEL_STYLES}>제목</span>
          <Input
            id="title"
            type="text"
            variant="title"
            width="wide"
            className="text-base border-green bg-white focus:outline-0"
            required
          />
        </div>

        <div className={INFO_CONTAINER_STYLES}>
          <span className={LABEL_STYLES}>평점</span>
          <StarRating rating={rating} setRating={setRating} />
        </div>

        <RouteInfoContainer label="일정" content={ROUTE_INFO_DUMMY_DATA.title} />
        <RouteInfoContainer label="경로" content={ROUTE_INFO_DUMMY_DATA.route} />

        {/* <Button type="submit" size="sm" color="blue" label="등록" className="self-end" onClick={handleSubmit}/> */}
      </form>

      {showLayerPopup && <>{/* <LayerPopup /> */}</>}
    </div>
  );
};

export default Page;
