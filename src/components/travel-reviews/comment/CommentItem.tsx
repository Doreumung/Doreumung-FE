import { useState } from 'react';
import LayerPopup from '@/components/common/layerPopup/LayerPopup';
import CommentForm from './CommentForm';
import { CommentItemProps } from '../types';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import { Pen, X } from 'lucide-react';
import clsx from 'clsx';
import { useWebSocketContext } from '@/contexts/useWebSocketContext';

const CommentItem = ({
  comment: { comment_id, user_id, nickname, content, created_at },
}: CommentItemProps) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [showLayerPopup, setShowLayerPopup] = useState<boolean>(false);
  const user = useAppSelector((state: RootState) => state.user.user);
  const { sendJsonMessage, isSocketOpen } = useWebSocketContext();

  dayjs.extend(relativeTime);

  const sendDeleteCommentRequest = () => {
    if (isSocketOpen && comment_id) {
      sendJsonMessage(JSON.stringify({ type: 'comment', method: 'DELETE', comment_id, user_id }));
    }
  };

  return (
    <div className="flex flex-col items-start gap-1 pb-2">
      <div className="flex justify-between items-center gap-2 pl-1">
        <span className="text-darkerGray text-sm">{nickname}</span>
        {user && user.id === user_id && (
          <div className="flex justify-center items-center size-3.5">
            <Pen
              className="shrink-0 text-darkGray cursor-pointer size-3 hover:size-3.5"
              strokeWidth={3}
              onClick={() => setIsEditMode(prev => !prev)}
            />
          </div>
        )}
      </div>
      <div className="flex items-end gap-2 w-full">
        {isEditMode && (
          <CommentForm content={content} setShowForm={setIsEditMode} comment_id={comment_id} />
        )}
        {!isEditMode && (
          <div className="flex items-start gap-2 px-3 py-2 border border-darkerGray rounded-xl bg-white">
            {content}
            {user && user.id === user_id && (
              <>
                <div className="flex justify-center items-center relative -top-0.5 -right-0.5 size-3.5">
                  <X
                    className="shrink-0 text-red cursor-pointer size-3 hover:size-3.5"
                    strokeWidth={4}
                    onClick={() => setShowLayerPopup(true)}
                  />
                </div>
              </>
            )}
          </div>
        )}
        <span className={clsx('shrink-0 text-darkGray text-xs', isEditMode && 'hidden')}>
          {dayjs().locale('ko').to(dayjs(created_at))}
        </span>
      </div>

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
