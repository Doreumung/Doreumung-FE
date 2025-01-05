import { useState } from 'react';
import LayerPopup from '@/components/common/layerPopup/LayerPopup';
import { covertDateTime } from '@/utils/utils';
import { CommentType } from '@/app/travel-reviews/types';
import CommentForm from './CommentForm';
import EditAndDelete from '../EditAndDelete';

const USER_ID = 102;

const CommentItem = ({
  comment: { user_id, nickname, content, created_at },
}: {
  comment: CommentType;
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [showLayerPopup, setShowLayerPopup] = useState<boolean>(false);

  const sendDeleteCommentRequest = () => {
    console.log('댓글 삭제 요청하기');
  };

  return (
    <div className="flex flex-col gap-4 pb-4 border-b border-lighterGray last:border-none">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center gap-2">
          <span className="text-darkerGray text-sm">{nickname}</span>
          {USER_ID === user_id && (
            <EditAndDelete
              onClickEdit={() => setIsEditMode(true)}
              onClickDelete={() => setShowLayerPopup(true)}
              className="text-sm text-darkGray"
            />
          )}
        </div>
        <span className="text-darkGray text-xs">{covertDateTime(created_at)}</span>
      </div>

      {isEditMode && <CommentForm content={content} setShowForm={setIsEditMode} />}
      {!isEditMode && <p>{content}</p>}

      {showLayerPopup && (
        <LayerPopup
          label={
            <>
              삭제한 댓글은 복구할 수 없습니다.
              <br />
              삭제하시겠습니까?
            </>
          }
          onConfirm={sendDeleteCommentRequest}
          setShowLayerPopup={setShowLayerPopup}
        />
      )}
    </div>
  );
};

export default CommentItem;
