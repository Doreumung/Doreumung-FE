import type { Metadata } from 'next';
import '@/styles/reset.css';
import '@/styles/globals.css';
import Header from '@/components/common/header/Header';
import Providers from '@/components/providers/Providers';
import { CheckLoginStatus } from './CheckLoginStatus';
import Toast from '@/components/common/toast/Toast';
import Footer from '@/components/landingPage/footer/Footer';
import ResetSortAndPage from './ResetSortAndPage';

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
          <main className="flex justify-center w-full min-h-[cal(100% - 64px )] px-4 mt-16 md:px-6 md:mt-20">
            {children}
          </main>
          <Footer />
          <CheckLoginStatus />
          <ResetSortAndPage />
          <Toast />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
