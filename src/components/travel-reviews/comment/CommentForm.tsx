import Button from '@/components/common/buttons/Button';
import { commentFormSchema } from '@/app/travel-reviews/schemas';
import { CommentFormType } from '@/app/travel-reviews/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import ErrorMessage from '@/components/common/errorMessage/ErrorMessage';
import { useEditCommentMutation, usePostCommentMutation } from '@/api/commentApi';
import { toast } from '@/components/common/toast/Toast';
import { useParams } from 'next/navigation';
import { CommentFormProps } from '../types';
import {
  EDIT_COMMENT_ERROR_MESSAGE,
  EDIT_COMMENT_SUCCESS_MESSAGE,
  POST_COMMENT_ERROR_MESSAGE,
  POST_COMMENT_SUCCESS_MESSAGE,
} from '../constants';

const CommentForm = ({ content = '', setShowForm, comment_id }: CommentFormProps) => {
  const { reviewId: review_id } = useParams();
  const [postComment] = usePostCommentMutation();
  const [editComment] = useEditCommentMutation();

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
    if (!comment_id) {
      postComment({ review_id: Number(review_id), content: comment })
        .unwrap()
        .then(() => {
          reset({ content: '' });
          toast(POST_COMMENT_SUCCESS_MESSAGE);
        })
        .catch(() => toast(POST_COMMENT_ERROR_MESSAGE));
    } else if (setShowForm && comment_id) {
      editComment({ comment_id, content: comment })
        .unwrap()
        .then(res => {
          setShowForm(false);
          reset({ content: res.content });
          toast(EDIT_COMMENT_SUCCESS_MESSAGE);
        })
        .catch(() => toast(EDIT_COMMENT_ERROR_MESSAGE));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <textarea
          {...register('content')}
          maxLength={255}
          className="h-28 px-3 py-2 border border-darkGray rounded-2xl outline-none resize-none"
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
                className="w-16 text-sm"
              />
            )}
            <Button
              type="submit"
              color="blue"
              size="xs"
              label={!comment_id ? '등록' : '저장'}
              className="w-16 text-sm"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
