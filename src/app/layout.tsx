import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/common/header/Header';

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
        <Header />
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
