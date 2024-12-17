import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '도르멍',
  description: 'OZ_06_MERN_PROJECT',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
