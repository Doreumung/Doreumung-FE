import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import { SendJsonMessage } from 'react-use-websocket/dist/lib/types';

const SOCKET_URL = 'wss://api.doreumung.site/ws/likes' as const;

const WebSocketContext = createContext<
  | {
      sendJsonMessage: SendJsonMessage;
      lastMessage: MessageEvent | null;
      isSocketOpen: boolean;
      setReviewId: Dispatch<SetStateAction<string>>;
    }
  | undefined
>(undefined);

const WebSocketContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [reviewId, setReviewId] = useState<string>('');
  const socketUrl = reviewId ? `${SOCKET_URL}?review_id=${reviewId}` : '';

  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => console.log('✨ WebSocket 연결 열림'),
    onError: error => console.log('🚨 WebSocket 에러', error),
    onClose: () => console.log('💀 WebSocket 연결 닫힘'),
    shouldReconnect: () => true,
  });

  const isSocketOpen = readyState === 1;

  return (
    <WebSocketContext.Provider value={{ sendJsonMessage, lastMessage, isSocketOpen, setReviewId }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocketContext = () => {
  const context = useContext(WebSocketContext);

  if (context) return context;
  else throw new Error('WebSocketContext를 사용할 수 없습니다.');
};

export default WebSocketContextProvider;
