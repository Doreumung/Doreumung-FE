import Button from '@/components/common/buttons/Button';
import { commentFormSchema } from '@/app/travel-reviews/schemas';
import { CommentFormType } from '@/app/travel-reviews/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Dispatch, SetStateAction } from 'react';
import ErrorMessage from '@/components/common/errorMessage/ErrorMessage';

const CommentForm = ({
  content = '',
  setShowForm,
}: {
  content?: string;
  setShowForm?: Dispatch<SetStateAction<boolean>>;
}) => {
  const isNew = !!setShowForm;

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
    if (!setShowForm) {
      console.log('새 댓글: ', comment);
      reset({ content: '' });
      // 새 댓글 작성 요청
    } else if (setShowForm) {
      console.log('수정된 댓글: ', comment);
      setShowForm(false);
      reset({ content: comment });
      // 댓글 수정 요청
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
