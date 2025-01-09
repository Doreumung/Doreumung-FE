import Input from '@/components/common/inputs/Input';
import { INFO_CONTAINER_STYLES, LABEL_STYLES } from '../constants';
import { useState } from 'react';
import StarRating from '@/components/travel-reviews/reviewForm/StarRatings';
import RouteInfoContainer from '@/components/travel-reviews/RouteInfoContainer';
import LayerPopup from '@/components/common/layerPopup/LayerPopup';
import Button from '@/components/common/buttons/Button';
import { useParams, useRouter } from 'next/navigation';
import Tiptap from '@/components/travel-reviews/textEditor/Tiptap';
import Toolbar from '@/components/travel-reviews/textEditor/Toolbar';
import useTiptap from '@/hooks/useTiptap';
import {
  EditReviewRequestType,
  PostReviewRequestType,
  ReviewFormType,
} from '@/app/travel-reviews/types';
import { reviewFormSchema } from '@/app/travel-reviews/schemas';
import { ReviewFormProps } from '../types';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { REVIEW_DATA, ROUTE_INFO_DUMMY_DATA } from '@/components/travel-reviews/mockData';
import ErrorMessage from '@/components/common/errorMessage/ErrorMessage';
import ThumbnailPicker from './ThumbnailPicker';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { usePostReviewMutation } from '@/api/reviewApi';
import Toast, { toast } from '@/components/common/toast/Toast';

const ReviewForm = ({ mode = 'create' }: ReviewFormProps) => {
  const router = useRouter();
  const { routeId, reviewId } = useParams();
  const user = useAppSelector((state: RootState) => state.user.user);
  const [postReview] = usePostReviewMutation();
  const [title, setTitle] = useState<string>(mode === 'create' ? '' : REVIEW_DATA.title);
  const [rating, setRating] = useState<number>(mode === 'create' ? 0 : REVIEW_DATA.rating);
  const [content, setContent] = useState<string>(mode === 'create' ? '' : REVIEW_DATA.content);
  const [thumbnail, setThumbnail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showLayerPopup, setShowLayerPopup] = useState<boolean>(false);
  const { editor } = useTiptap(content);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ReviewFormType>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: { title, rating, content },
  });

  const onSubmit: SubmitHandler<ReviewFormType> = data => {
    setTitle(data.title);
    setRating(data.rating);
    setContent(editor!.getHTML());

    setShowLayerPopup(true);
  };

  const sendReviewRequest = () => {
    if (user) {
      setIsLoading(true);
      if (mode === 'create') {
        const newReview: PostReviewRequestType = {
          travel_route_id: Number(routeId),
          title,
          content,
          rating,
          thumbnail,
        };

        postReview(newReview)
          .unwrap()
          .then(res => {
            toast({ message: '후기가 성공적으로 등록되었습니다!' });
            router.push(`/travel-reviews/detail/${res.id}`);
          })
          .catch(() => {
            setIsLoading(false);
            toast({
              message: (
                <>
                  후기 등록에 실패하였습니다.
                  <br />
                  잠시 후 다시 시도해 주세요.
                </>
              ),
              type: 'error',
            });
          });
      } else {
        const editedReview: EditReviewRequestType = {
          id: Number(reviewId),
          title,
          content,
          rating,
        };
        console.log('EditReviewRequest', editedReview);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full md:gap-4"
        noValidate
      >
        <div className={INFO_CONTAINER_STYLES}>
          <span className={LABEL_STYLES}>제목</span>
          <div className="flex flex-col w-full">
            <Input
              {...register('title')}
              id="title"
              type="text"
              variant="title"
              width="wide"
              className="text-base border-green bg-white focus:outline-0"
            />
            {errors.title?.message && <ErrorMessage message={errors.title.message} />}
          </div>
        </div>

        <Controller
          name="rating"
          control={control}
          render={({ field }) => (
            <div className={INFO_CONTAINER_STYLES}>
              <span className={LABEL_STYLES}>평점</span>
              <StarRating value={field.value} onChange={field.onChange} />
            </div>
          )}
        />

        <RouteInfoContainer label="일정" content={ROUTE_INFO_DUMMY_DATA.title} />
        <RouteInfoContainer label="경로" content={ROUTE_INFO_DUMMY_DATA.route} />

        <Controller
          name="content"
          control={control}
          render={({ field }) => {
            if (editor) {
              editor.on('update', () => {
                field.onChange(editor.getText().trim());
              });
            }
            return (
              <div>
                <Toolbar editor={editor} />
                <Tiptap editor={editor} />
                {errors.content?.message && <ErrorMessage message={errors.content.message} />}
              </div>
            );
          }}
        />

        <ThumbnailPicker thumbnailImageUrl={thumbnail} setThumbnailImageUrl={setThumbnail} />

        <Button
          type="submit"
          size="sm"
          color="blue"
          label="등록"
          className="self-end"
          disabled={isLoading}
        />
      </form>
      <Toast />
      {showLayerPopup && (
        <LayerPopup
          label="후기를 등록하시겠습니까?"
          setShowLayerPopup={setShowLayerPopup}
          onConfirm={() => sendReviewRequest()}
        />
      )}
    </>
  );
};

export default ReviewForm;
