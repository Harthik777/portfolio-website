/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.shields.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
    ],
  },
  // Skip build optimizations that might cause webpack errors
  transpilePackages: ['three'],
  webpack: (config, { isServer }) => {
    // Handle Three.js related modules
    if (!isServer) {
      config.externals = config.externals || {};
      config.externals['three'] = 'three';
    }
    return config;
  },
};

module.exports = nextConfig;
