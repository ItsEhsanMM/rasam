import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://rasam.agency/**')],
  },
};

export default nextConfig;
