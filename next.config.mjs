/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 72, 96, 128, 256, 384],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};


export default nextConfig;
