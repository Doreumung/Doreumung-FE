import { GetCommentsResponseType } from '@/app/travel-reviews/types';
import CommentItem from './CommentItem';

const CommentList = ({ comments }: { comments: GetCommentsResponseType }) => {
  return (
    <div className="flex flex-col gap-4 pt-6">
      {comments.map(comment => (
        <CommentItem key={`${comment.nickname}-${comment.created_at}`} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
