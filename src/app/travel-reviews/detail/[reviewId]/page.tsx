'use client';

import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import { Heart } from 'lucide-react';
import React, { useEffect, useState } from 'react';
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
import { toast } from '@/components/common/toast/Toast';
import { useGetCommentsQuery } from '@/api/commentApi';
import ApiErrorMessage from '@/components/common/errorMessage/ApiErrorMessage';
import useWebSocket from 'react-use-websocket';
import clsx from 'clsx';

const Page = () => {
  const router = useRouter();
  const user = useAppSelector((state: RootState) => state.user.user);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false);
  const { reviewId: review_id } = useParams();

  const [deleteReview] = useDeleteReviewMutation();

  const {
    data: commentData,
    isLoading: commentsLoading,
    error: commentsError,
  } = useGetCommentsQuery(Number(review_id));

  const socketUrl = review_id
    ? `wss://aaa0-121-143-108-42.ngrok-free.app/ws/likes?review_id=${review_id}`
    : '';

  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => console.log('✨ WebSocket 연결 열림'),
    onError: error => console.log('🚨 WebSocket 에러', error),
    onClose: () => console.log('💀 WebSocket 연결 닫힘'),
    shouldReconnect: () => true,
  });

  const isSocketOpen = readyState === 1;

  const { data, isLoading, error } = useGetReviewDetailQuery(Number(review_id), {
    skip: isSocketOpen,
  });

  const {
    user_id = '',
    title = '',
    nickname = '',
    content = '',
    rating = 0,
    like_count = 0,
    liked_by_user = false,
    regions = [],
    travel_route = [],
    themes = [],
    created_at = '',
  } = data || {};

  const handleClickEdit = () => {
    router.push(`/travel-reviews/edit/${review_id}`);
  };

  const sendDeleteReviewRequest = () => {
    deleteReview({ review_id: Number(review_id) })
      .unwrap()
      .then(() => {
        toast({ message: ['후기가 성공적으로 삭제되었습니다!'] });
        router.push('/travel-reviews');
      })
      .catch(() => {
        toast({
          message: ['후기 삭제에 실패하였습니다.', '잠시 후 다시 시도해 주세요.'],
          type: 'error',
        });
      });
  };

  useEffect(() => {
    if (data) {
      setIsLiked(liked_by_user);
      setLikes(like_count);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleClickLike = () => {
    if (!user) {
      setShowLoginPopup(true);
    } else if (user && user.id === user_id) {
      toast({ message: ['자신의 후기에 좋아요를 누를 수 없습니다.'], type: 'error' });
    } else if (!isSocketOpen) {
      toast({
        message: ['오류가 발생하였습니다.', '잠시 후 다시 시도해 주세요.'],
        type: 'error',
      });
    } else if (isLiked) {
      if (likes > 0) {
        sendJsonMessage(JSON.stringify({ user_id: user.id, review_id, is_liked: false }));
      } else {
        toast({
          message: ['오류가 발생하였습니다.', '잠시 후 다시 시도해 주세요.'],
          type: 'error',
        });
      }
    } else {
      sendJsonMessage(JSON.stringify({ user_id: user.id, review_id, is_liked: true }));
    }
  };

  useEffect(() => {
    if (lastMessage) {
      const receivedData: {
        review_id: string;
        user_id: string;
        like_count: number;
        is_liked: boolean;
      } = JSON.parse(lastMessage.data);
      if (typeof receivedData.like_count === 'number') {
        if (receivedData.like_count >= 0) setLikes(receivedData.like_count);
        else {
          toast({
            message: ['오류가 발생하였습니다.', '잠시 후 다시 시도해 주세요.'],
            type: 'error',
          });
        }
      }
      if (typeof receivedData.is_liked === 'boolean') setIsLiked(receivedData.is_liked);
      console.log('received: ', receivedData);
    }
  }, [lastMessage]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col items-center w-full">
      {error && <ApiErrorMessage />}
      {!error && data && (
        <>
          <BackNavigation to="reviewList" />

          <h3 className="block pt-12 pb-1 text-3xl text-center">{title}</h3>
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

            <div className="flex flex-col gap-8 w-full pb-4 border-b border-lighterGray">
              <div className="leading-10" dangerouslySetInnerHTML={{ __html: content }} />
              <div className="flex justify-between items-center">
                <div
                  className="flex items-center gap-2 text-darkerGray cursor-pointer"
                  onClick={handleClickLike}
                >
                  <Heart
                    className={clsx(
                      isLiked ? 'fill-logo' : 'fill-fadedOrange',
                      'hover:fill-logo hover:scale-110 transition duration-75 ease-in',
                    )}
                  />
                  <span>{`좋아요 ${likes}`}</span>
                </div>
                {user && user.id === user_id && (
                  <EditAndDelete
                    onClickEdit={handleClickEdit}
                    onClickDelete={() => setShowDeletePopup(true)}
                  />
                )}
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
            {commentsError && <ApiErrorMessage />}
            {commentData && <CommentList comments={commentData} />}
          </section>

          {showDeletePopup && (
            <LayerPopup
              label="후기를 삭제하시겠습니까?"
              setShowLayerPopup={setShowDeletePopup}
              onConfirm={sendDeleteReviewRequest}
            />
          )}

          {showLoginPopup && (
            <LayerPopup
              label={
                <>
                  로그인이 필요한 서비스입니다.
                  <br />
                  로그인하시겠습니까?
                </>
              }
              setShowLayerPopup={setShowLoginPopup}
              onConfirm={() => router.push('/sign-in')}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Page;
