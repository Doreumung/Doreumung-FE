'use client';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@/store/store';
import ClientProvider from '@/app/ClientProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientProvider>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </ClientProvider>
  );
}
