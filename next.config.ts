import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'doreumung-06.s3.ap-northeast-2.amazonaws.com',
        pathname: '*/*',
      },
    ],
  },
};

export default nextConfig;
