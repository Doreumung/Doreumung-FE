'use client';

import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import { Heart } from 'lucide-react';
import React, { useState } from 'react';
import LayerPopup from '@/components/common/layerPopup/LayerPopup';
import { useParams, useRouter } from 'next/navigation';
import RouteInfoContainer from '@/components/travel-reviews/RouteInfoContainer';
import { covertDateTime } from '@/utils/utils';
import CommentList from '@/components/travel-reviews/comment/CommentList';
import CommentForm from '@/components/travel-reviews/comment/CommentForm';
import { COMMENT_DATA, REVIEW_DATA } from '@/components/travel-reviews/mockData';
import StarRating from '@/components/travel-reviews/reviewForm/StarRatings';
import EditAndDelete from '@/components/travel-reviews/EditAndDelete';

const Page = () => {
  const router = useRouter();
  const { reviewId } = useParams();
  const [showLayerPopup, setShowLayerPopup] = useState<boolean>(false);
  const {
    title,
    rating,
    nickname,
    created_at,
    regions,
    travel_route,
    content,
    like_count,
    // comment_count,
  } = REVIEW_DATA;

  const handleClickEdit = () => {
    router.push(`/travel-reviews/edit/${reviewId}`);
  };

  // 여행 후기 삭제 요청 구현 필요
  const sendDeleteReviewRequest = () => {
    console.log('후기 삭제 요청');
  };

  return (
    <div className="flex flex-col items-center w-full">
      <BackNavigation to="reviewList" />

      <h3 className="block pt-12 pb-1 text-darkerGray text-3xl text-center">{title}</h3>
      <p className="flex items-center gap-3 pb-12 text-sm text-darkerGray">
        <span>{nickname}</span>
        <span>{covertDateTime(created_at)}</span>
      </p>

      <div className="flex flex-col items-start gap-4 w-full">
        <StarRating value={rating} />

        <div className="flex flex-col gap-3 sm:gap-1">
          <RouteInfoContainer
            variant="reviewDetail"
            label="여행 지역"
            content={regions.join(', ')}
          />
          <RouteInfoContainer
            variant="reviewDetail"
            label="여행 경로"
            content={travel_route.join(' - ')}
          />
        </div>

        <div className="h-96 w-full border border-darkerGray bg-fadedSkyblue">
          {/* 지도 또는 후기 대표 사진 */}
        </div>

        <div className="flex flex-col gap-8 w-full pt-8 pb-4 border-b border-lighterGray">
          <div className="leading-10" dangerouslySetInnerHTML={{ __html: content }} />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-darkerGray cursor-pointer">
              <Heart className="fill-fadedOrange hover:fill-logo hover:scale-110 transition duration-75 ease-in" />
              <span>{`좋아요 ${like_count}`}</span>
            </div>
            <EditAndDelete
              onClickEdit={handleClickEdit}
              onClickDelete={() => setShowLayerPopup(true)}
            />
          </div>
        </div>
      </div>

      <section className="w-full border-b border-lighterGray">
        <div className="flex items-center gap-2 py-4">
          <h3 className="text-xl">댓글</h3>
          <span className="text-sm">{COMMENT_DATA.length}개</span>
        </div>
        <CommentForm />
        <CommentList comments={COMMENT_DATA} />
      </section>

      {showLayerPopup && (
        <LayerPopup
          label="후기를 삭제하시겠습니까?"
          setShowLayerPopup={setShowLayerPopup}
          onConfirm={sendDeleteReviewRequest}
        />
      )}
    </div>
  );
};

export default Page;
