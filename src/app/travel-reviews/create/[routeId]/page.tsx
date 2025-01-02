'use client';

import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import Input from '@/components/common/inputs/Input';
import { INFO_CONTAINER_STYLES, LABEL_STYLES, ROUTE_INFO_DUMMY_DATA } from './constants';
import { useRef, useState } from 'react';
import StarRating from '@/components/travel-reviews/StarRatings';
import RouteInfoContainer from '@/components/travel-reviews/RouteInfoContainer';
import LayerPopup from '@/components/common/layerPopup/LayerPopup';
import Button from '@/components/common/buttons/Button';
import { useParams } from 'next/navigation';
import Tiptap from '@/components/travel-reviews/textEditor/Tiptap';
import Toolbar from '@/components/travel-reviews/textEditor/Toolbar';
import useTiptap from '@/hooks/useTiptap';

const Page = () => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const { editor } = useTiptap();
  const { routeId: travel_route_id } = useParams();
  const [showLayerPopup, setShowLayerPopup] = useState<boolean>(false);
  const [rating, setRating] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowLayerPopup(true);
  };

  const postReview = () => {
    let title, content;

    if (titleRef.current && editor) {
      title = titleRef.current.value;
      content = editor.getHTML();
    }

    const request = {
      travel_route_id,
      title,
      rating,
      content,
      // photo_urls
    };

    console.log(request);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <BackNavigation to="reviewList" />

      <h3 className="block py-12 text-darkerGray text-3xl">후기 작성</h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full md:gap-4" noValidate>
        <div className={INFO_CONTAINER_STYLES}>
          <span className={LABEL_STYLES}>제목</span>
          <Input
            ref={titleRef}
            id="title"
            type="text"
            variant="title"
            width="wide"
            className="text-base border-green bg-white focus:outline-0"
            maxLength={50}
            required
          />
        </div>

        <div className={INFO_CONTAINER_STYLES}>
          <span className={LABEL_STYLES}>평점</span>
          <StarRating rating={rating} setRating={setRating} />
        </div>

        <RouteInfoContainer label="일정" content={ROUTE_INFO_DUMMY_DATA.title} />
        <RouteInfoContainer label="경로" content={ROUTE_INFO_DUMMY_DATA.route} />

        <section>
          <Toolbar editor={editor} />
          <Tiptap editor={editor} />
        </section>

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
