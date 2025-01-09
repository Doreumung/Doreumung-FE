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
import StarRating from '@/components/travel-reviews/reviewForm/StarRatings';
import EditAndDelete from '@/components/travel-reviews/EditAndDelete';
import { useDeleteReviewMutation, useGetReviewDetailQuery } from '@/api/reviewApi';
import LoadingSpinner from '@/components/common/loadingSpinner/LoadingSpinner';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import Toast, { toast } from '@/components/common/toast/Toast';
import { useGetCommentsQuery } from '@/api/commentApi';

const Page = () => {
  const router = useRouter();
  const { reviewId: review_id } = useParams();
  const { data, isLoading, error } = useGetReviewDetailQuery(Number(review_id));
  const {
    data: commentData,
    isLoading: commentsLoading,
    error: commentsError,
  } = useGetCommentsQuery(Number(review_id));
  const [deleteReview] = useDeleteReviewMutation();
  const [showLayerPopup, setShowLayerPopup] = useState<boolean>(false);
  const user = useAppSelector((state: RootState) => state.user.user);

  if (!data || error)
    return (
      <p className="text-red text-center">
        오류가 발생하였습니다.
        <br />
        잠시 후 다시 시도해 주세요.
      </p>
    );

  const {
    // user_id,
    title,
    nickname,
    content,
    rating,
    like_count,
    liked_by_user,
    regions,
    travel_route,
    themes,
    created_at,
  } = data;

  const handleClickEdit = () => {
    router.push(`/travel-reviews/edit/${review_id}`);
  };

  const sendDeleteReviewRequest = () => {
    deleteReview({ review_id: Number(review_id) })
      .unwrap()
      .then(() => {
        toast({ message: '후기가 성공적으로 삭제되었습니다!' });
        router.push('/travel-reviews');
      })
      .catch(() => {
        toast({
          message: (
            <>
              후기 삭제에 실패하였습니다.
              <br />
              잠시 후 다시 시도해 주세요.
            </>
          ),
          type: 'error',
        });
      });
  };

  const handleClickLike = () => {
    if (!user) return;
    if (liked_by_user) {
      // 좋아요 취소 요청
    } else {
      // 좋아요 요청
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center w-full">
      {!error && (
        <>
          <BackNavigation to="reviewList" />

          <h3 className="block pt-12 pb-1 text-darkerGray text-3xl text-center">{title}</h3>
          <p className="flex items-center gap-3 pb-12 text-sm text-darkerGray">
            <span>{nickname}</span>
            <span>{covertDateTime(created_at)}</span>
          </p>

          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex flex-col gap-5 sm:gap-1">
              <RouteInfoContainer
                variant="reviewDetail"
                label="평점"
                content={<StarRating value={rating} />}
              />
              <RouteInfoContainer variant="reviewDetail" label="테마" content={themes.join(', ')} />
              <RouteInfoContainer
                variant="reviewDetail"
                label="지역"
                content={regions.join(', ')}
              />
              <RouteInfoContainer
                variant="reviewDetail"
                label="경로"
                content={travel_route.join(' - ')}
              />
            </div>

            <div className="h-96 w-full border border-darkerGray bg-fadedSkyblue">
              {/* 지도 또는 후기 대표 사진 */}
            </div>

            <div className="flex flex-col gap-8 w-full pt-8 pb-4 border-b border-lighterGray">
              <div className="leading-10" dangerouslySetInnerHTML={{ __html: content }} />
              <div className="flex justify-between items-center">
                <div
                  className="flex items-center gap-2 text-darkerGray cursor-pointer"
                  onClick={handleClickLike}
                >
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
              <span className="text-sm">{commentData ? commentData.length : 0}개</span>
            </div>
            <CommentForm />
            {commentsLoading && <LoadingSpinner />}
            {commentsError && (
              <p className="text-red text-center">
                오류가 발생하였습니다.
                <br />
                잠시 후 다시 시도해 주세요.
              </p>
            )}
            {commentData && <CommentList comments={commentData} />}
          </section>

          {showLayerPopup && (
            <LayerPopup
              label="후기를 삭제하시겠습니까?"
              setShowLayerPopup={setShowLayerPopup}
              onConfirm={sendDeleteReviewRequest}
            />
          )}
        </>
      )}
      <Toast />
    </div>
  );
};

export default Page;
