import { twMerge } from 'tailwind-merge';
import { EditAndDeleteProps } from './types';

const EditAndDelete = ({ onClickEdit, onClickDelete, className }: EditAndDeleteProps) => {
  return (
    <div className={twMerge('flex gap-3 text-darkerGray', className)}>
      <span className="cursor-pointer hover:underline" onClick={() => onClickEdit()}>
        수정
      </span>
      <span className="cursor-pointer hover:underline" onClick={() => onClickDelete()}>
        삭제
      </span>
    </div>
  );
};

export default EditAndDelete;
