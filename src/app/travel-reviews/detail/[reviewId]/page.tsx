'use client';

import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import { COMMENT_DATA, REVIEW_DATA } from '../../constants';
import { Heart, Star } from 'lucide-react';
import Button from '@/components/common/buttons/Button';
import ReviewStats from '@/components/travel-reviews/ReviewStats';
import React, { useState } from 'react';
import LayerPopup from '@/components/common/layerPopup/LayerPopup';
import { useParams, useRouter } from 'next/navigation';
import RouteInfoContainer from '@/components/travel-reviews/RouteInfoContainer';
import { covertDateTime } from '@/utils/utils';
import CommentList from '@/components/travel-reviews/comment/CommentList';
import CommentForm from '@/components/travel-reviews/comment/CommentForm';

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
  const handleDeleteRequest = () => {
    console.log('후기 삭제 요청');
  };

  return (
    <div className="flex flex-col items-center w-full">
      <BackNavigation to="reviewList" />

      <h3 className="block py-12 text-darkerGray text-3xl">여행 후기</h3>

      <section className="flex flex-col items-start w-full">
        <ReviewStats stats={rating} color="yellow" icon={Star} className="self-end" />
        <div className="flex flex-col gap-1">
          <p className="text-2xl">{title}</p>
          <p className="flex items-center gap-3 text-sm text-darkerGray">
            <span>{nickname}</span>
            <span>{covertDateTime(created_at)}</span>
          </p>
        </div>

        <div className="h-96 w-full my-8 border border-darkerGray bg-fadedSkyblue">
          {/* 지도 또는 후기 대표 사진 */}
        </div>

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

        <div className="flex flex-col gap-5 w-full py-8 border-y border-lighterGray">
          <div className="leading-10" dangerouslySetInnerHTML={{ __html: content }} />
          <div className="flex justify-between">
            <ReviewStats stats={`좋아요 ${like_count}`} color="fadedOrange" icon={Heart} />
            <div className="flex gap-3">
              <Button
                size="xs"
                color="lighterGray"
                label="수정"
                onClick={handleClickEdit}
                className="w-16 text-sm"
              />
              <Button
                size="xs"
                color="lighterGray"
                label="삭제"
                onClick={() => setShowLayerPopup(true)}
                className="w-16 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-lighterGray">
        <div className="flex items-center gap-2 pt-8 pb-4">
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
          onConfirm={handleDeleteRequest}
        />
      )}
    </div>
  );
};

export default Page;
