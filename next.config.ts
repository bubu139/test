// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Đảm bảo không có dòng "output: 'export'," ở đây
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Bỏ "unoptimized: true" nếu bạn muốn Vercel tối ưu ảnh
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Fallback webpack có thể giữ lại nếu cần
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }
    return config;
  },
  // Giữ lại nếu Vercel cần
  serverComponentsExternalPackages: [
    'genkit',
    '@genkit-ai/core',
    '@genkit-ai/google-genai',
  ],
  // Không cần basePath hay assetPrefix trừ khi bạn có lý do đặc biệt
};

export default nextConfig;
