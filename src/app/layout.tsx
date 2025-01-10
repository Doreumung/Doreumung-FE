import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/common/header/Header';
import Providers from '@/components/providers/Providers';
import { CheckLoginStatus } from './CheckLoginStatus';

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
        <Providers>
          <Header />
          <CheckLoginStatus />
          <main className="flex justify-center w-full mt-16 md:mt-20">{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
