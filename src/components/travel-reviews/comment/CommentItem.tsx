import { useState } from 'react';
import LayerPopup from '@/components/common/layerPopup/LayerPopup';
import { covertDateTime } from '@/utils/utils';
import { CommentType } from '@/app/travel-reviews/types';
import clsx from 'clsx';

const USER_ID = 102;

const CommentItem = ({
  comment: { user_id, nickname, content, created_at },
}: {
  comment: CommentType;
}) => {
  const [showLayerPopup, setShowLayerPopup] = useState<boolean>(false);

  const sendDeleteCommentRequest = () => {
    console.log('댓글 삭제 요청하기');
  };

  return (
    <div className="flex flex-col gap-4 pb-4 border-b border-lighterGray last:border-none">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center gap-2">
          <span className="text-darkerGray text-sm">{nickname}</span>
          <div
            className={clsx(USER_ID !== user_id && 'hidden', 'flex gap-2 text-sm text-darkGray')}
          >
            <span className="cursor-pointer hover:underline">수정</span>
            <span
              className="cursor-pointer hover:underline"
              onClick={() => setShowLayerPopup(true)}
            >
              삭제
            </span>
          </div>
        </div>
        <span className="text-darkGray text-xs">{covertDateTime(created_at)}</span>
      </div>

      <p>{content}</p>

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
