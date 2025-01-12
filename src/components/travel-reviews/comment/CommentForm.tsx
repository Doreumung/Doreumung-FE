import Button from '@/components/common/buttons/Button';
import { commentFormSchema } from '@/app/travel-reviews/schemas';
import { CommentFormType } from '@/app/travel-reviews/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import ErrorMessage from '@/components/common/errorMessage/ErrorMessage';
import { useParams } from 'next/navigation';
import { CommentFormProps } from '../types';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { useWebSocketContext } from '@/contexts/useWebSocketContext';

const CommentForm = ({ content = '', setShowForm, comment_id }: CommentFormProps) => {
  const { reviewId: review_id } = useParams();
  const user = useAppSelector((state: RootState) => state.user.user);
  const { sendJsonMessage, isSocketOpen } = useWebSocketContext();

  const user_id = user ? user.id : '';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentFormType>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: { content },
  });

  const onSubmit: SubmitHandler<CommentFormType> = data => {
    const comment = data.content;
    if (isSocketOpen) {
      if (!comment_id) {
        sendJsonMessage(
          JSON.stringify({ type: 'comment', method: 'POST', review_id, content: comment, user_id }),
        );
        reset({ content: '' });
      } else if (setShowForm && comment_id) {
        sendJsonMessage(
          JSON.stringify({
            type: 'comment',
            method: 'PATCH',
            comment_id,
            review_id,
            content: comment,
            user_id,
          }),
        );
        setShowForm(false);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full">
        <textarea
          {...register('content')}
          maxLength={255}
          className="w-full px-3 py-2 border border-darkGray rounded-xl outline-none resize-none"
        />
        <div className="flex justify-between">
          <div>{errors.content?.message && <ErrorMessage message={errors.content.message} />}</div>
          <div className="flex gap-3">
            {setShowForm && (
              <Button
                type="button"
                color="lighterGray"
                size="xs"
                label="취소"
                onClick={() => setShowForm(false)}
                className="w-16 rounded-xl text-sm"
              />
            )}
            <Button
              type="submit"
              color="blue"
              size="xs"
              label={!comment_id ? '등록' : '저장'}
              className="w-16 rounded-xl text-sm"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
