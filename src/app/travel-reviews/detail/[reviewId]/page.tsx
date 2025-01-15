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
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { toast } from '@/components/common/toast/Toast';
import { useGetCommentsQuery } from '@/api/commentApi';
import ApiErrorMessage from '@/components/common/errorMessage/ApiErrorMessage';
import clsx from 'clsx';
import { SocketResponseType } from '@/app/travel-reviews/types';
import {
  DELETE_COMMENT_SUCCESS_MESSAGE,
  DELETE_REVIEW_ERROR_MESSAGE,
  DELETE_REVIEW_SUCCESS_MESSAGE,
  EDIT_COMMENT_SUCCESS_MESSAGE,
  LIKE_MY_OWN_REVIEW_ERROR_MESSAGE,
  POST_COMMENT_SUCCESS_MESSAGE,
  SOCKET_ERROR_MESSAGE,
} from '@/components/travel-reviews/constants';
import { useWebSocketContext } from '@/contexts/useWebSocketContext';
import { useGetTravelRouteByIdQuery } from '@/api/travelRouteApi';
import { setScheduleResponse } from '@/store/travelPlanSlice';
import Button from '@/components/common/buttons/Button';

const Page = () => {
  const router = useRouter();
  const { reviewId: review_id }: { reviewId: string } = useParams();

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false);
  const [travelRouteId, setTravelRouteId] = useState<number | null>(null);

  const user = useAppSelector((state: RootState) => state.user.user);
  const dispatch = useAppDispatch();

  const [deleteReview, { isLoading: deleteLoading, isSuccess }] = useDeleteReviewMutation();
  const { data, isLoading, error } = useGetReviewDetailQuery(Number(review_id), {
    skip: deleteLoading,
  });
  const {
    data: commentData,
    isLoading: commentsLoading,
    error: commentsError,
    refetch: commentRefetch,
  } = useGetCommentsQuery(Number(review_id));

  const { data: travelRouteData } = useGetTravelRouteByIdQuery(travelRouteId || 0, {
    skip: !travelRouteId,
  });

  const { sendJsonMessage, lastMessage, isSocketOpen, setReviewId } = useWebSocketContext();

  const {
    user_id = '',
    title = '',
    nickname = '',
    travel_route_id = 0,
    content = '',
    rating = 0,
    like_count = 0,
    liked_by_user = false,
    regions = [],
    travel_route = [],
    themes = [],
    created_at = '',
  } = data || {};

  useEffect(() => {
    if (data) {
      setIsLiked(liked_by_user);
      setLikeCount(like_count);
      setTravelRouteId(travel_route_id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setReviewId(review_id);
  }, [setReviewId, review_id]);

  useEffect(() => {
    if (travelRouteData) {
      dispatch(setScheduleResponse(travelRouteData.schedule));
    }
  }, [travelRouteData, dispatch]);

  useEffect(() => {
    if (lastMessage) {
      const receivedData: SocketResponseType = JSON.parse(lastMessage.data);

      if (receivedData.type === 'comment' && receivedData.review_id === review_id) {
        commentRefetch();

        if (user && receivedData.user_id === user.id) {
          switch (receivedData.method) {
            case 'POST':
              toast(POST_COMMENT_SUCCESS_MESSAGE);
              break;
            case 'PATCH':
              toast(EDIT_COMMENT_SUCCESS_MESSAGE);
              break;
            case 'DELETE':
              toast(DELETE_COMMENT_SUCCESS_MESSAGE);
              break;
            default:
              toast(SOCKET_ERROR_MESSAGE);
          }
        }
      }

      if (receivedData.type === 'like') {
        if (receivedData.review_id === review_id) {
          setLikeCount(receivedData.like_count);

          if (user && receivedData.user_id === user.id) setIsLiked(receivedData.is_liked);
        }
      }

      console.log('💬 websocket res:', receivedData);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMessage]);

  const handleClickLike = () => {
    if (!user) return setShowLoginPopup(true);
    if (user.id === user_id) return toast(LIKE_MY_OWN_REVIEW_ERROR_MESSAGE);
    if (!isSocketOpen) return toast(SOCKET_ERROR_MESSAGE);

    if (isLiked)
      sendJsonMessage(
        JSON.stringify({ type: 'like', user_id: user.id, review_id, is_liked: false }),
      );
    else if (!isLiked)
      sendJsonMessage(
        JSON.stringify({ type: 'like', user_id: user.id, review_id, is_liked: true }),
      );
  };

  const handleClickEdit = () => {
    router.push(`/travel-reviews/edit/${review_id}`);
  };

  const handleClickRoute = () => {
    router.push(`/travel-reviews/route/${travel_route_id}`);
  };

  const sendDeleteReviewRequest = () => {
    deleteReview({ review_id: Number(review_id) })
      .unwrap()
      .then(() => {
        router.push('/travel-reviews');
        toast(DELETE_REVIEW_SUCCESS_MESSAGE);
      })
      .catch(() => {
        toast(DELETE_REVIEW_ERROR_MESSAGE);
      });
  };

  if (isLoading || deleteLoading || isSuccess) return <LoadingSpinner />;

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

          <div className="flex flex-col items-start gap-4 w-full ">
            <div className="flex flex-col gap-5 w-full pb-4 border-b border-b-darkGray sm:gap-1">
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
              <div className="flex justify-end">
                <Button label="상세 경로" color="skyblue" onClick={handleClickRoute} />
              </div>
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
                  <span>{`좋아요 ${likeCount}`}</span>
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

          <section className="w-full">
            <div className="flex items-center gap-2 py-4">
              <h3 className="text-xl">댓글</h3>
              <span className="text-sm">{commentData ? commentData.length : 0}개</span>
            </div>
            {user && <CommentForm />}
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
