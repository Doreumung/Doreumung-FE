'use client';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@/store/store';
import ClientProvider from '@/app/ClientProvider';
import WebSocketContextProvider from '@/contexts/useWebSocketContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientProvider>
      <WebSocketContextProvider>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </WebSocketContextProvider>
    </ClientProvider>
  );
}
