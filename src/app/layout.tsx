import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/common/header/Header';
import ClientProvider from './ClientProvider';

export const metadata: Metadata = {
  title: '도르멍',
  description: 'OZ_06_MERN_PROJECT',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>
        <ClientProvider>
          <Header />
          <main className="flex justify-center w-full mt-16 md:mt-20">{children}</main>
        </ClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
