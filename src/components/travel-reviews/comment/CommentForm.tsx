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

const CommentForm = ({ content = '', setShowForm, comment_id }: CommentFormProps) => {
  const isNew = !comment_id;
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
    if (isNew) {
      postComment({ review_id: Number(review_id), content: comment })
        .unwrap()
        .then(() => {
          reset({ content: '' });
          toast({ message: '댓글이 성공적으로 등록되었습니다!' });
        })
        .catch(() =>
          toast({
            message: (
              <>
                댓글 등록에 실패하였습니다.
                <br />
                잠시 후 다시 시도해 주세요.
              </>
            ),
            type: 'error',
          }),
        );
    } else if (setShowForm && comment_id) {
      editComment({ comment_id, content: comment })
        .unwrap()
        .then(res => {
          setShowForm(false);
          reset({ content: res.content });
          toast({ message: '댓글이 성공적으로 수정되었습니다!' });
        })
        .catch(() =>
          toast({
            message: (
              <>
                댓글 수정에 실패하였습니다.
                <br />
                잠시 후 다시 시도해 주세요.
              </>
            ),
            type: 'error',
          }),
        );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <textarea
          {...register('content')}
          maxLength={255}
          className="h-28 p-2 border border-darkGray rounded-2xl outline-none resize-none"
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
              label={isNew ? '등록' : '저장'}
              className="w-16 text-sm"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
