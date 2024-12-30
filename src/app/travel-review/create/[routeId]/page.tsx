'use client';

import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import Input from '@/components/common/inputs/Input';
import { INFO_CONTAINER_STYLES, LABEL_STYLES, ROUTE_INFO_DUMMY_DATA } from './constants';
import { useRef, useState } from 'react';
import StarRating from '@/components/travel-review/StarRatings';
import RouteInfoContainer from '@/components/travel-review/RouteInfo';
import LayerPopup from '@/components/common/layerPopup/LayerPopup';
import Button from '@/components/common/buttons/Button';
import { useParams } from 'next/navigation';

const Page = () => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const { routeId: travel_route_id } = useParams();
  const [showLayerPopup, setShowLayerPopup] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [rating, setRating] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (titleRef.current) {
      setTitle(titleRef.current.value);
    }

    setShowLayerPopup(true);
  };

  // 제출 버튼 클릭 시 후기 등록 요청 필요
  const postReview = () => {
    const content = {
      travel_route_id,
      title,
      rating,
    };
    console.log(content);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <BackNavigation to="reviewList" />

      <h3 className="block py-12 text-darkerGray text-3xl">후기 작성</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-4 noValidate">
        <div className={INFO_CONTAINER_STYLES}>
          <span className={LABEL_STYLES}>제목</span>
          <Input
            ref={titleRef}
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

        <Button type="submit" size="sm" color="blue" label="등록" className="self-end" />
      </form>

      {showLayerPopup && (
        <LayerPopup
          label="후기를 등록하시겠습니까?"
          setShowLayerPopup={setShowLayerPopup}
          onConfirm={postReview}
        />
      )}
    </div>
  );
};

export default Page;
