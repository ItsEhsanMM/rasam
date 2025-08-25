import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rasam.agency',
        pathname: '/**',
      },
    
    ],
  },
};

export default nextConfig;
