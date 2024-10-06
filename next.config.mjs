/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com'], 
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};


export default nextConfig;
