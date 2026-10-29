import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Cloudflare Pages serves this site as a static export from /out.
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
