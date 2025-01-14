import { CommentListProps } from '../types';
import CommentItem from './CommentItem';

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className="flex flex-col-reverse gap-2">
      {comments.map(comment => (
        <CommentItem key={`${comment.nickname}-${comment.created_at}`} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
