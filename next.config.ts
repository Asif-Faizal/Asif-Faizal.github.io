/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for next/image to work with static export
  },
  // If your repo is not at the root, set the basePath and assetPrefix:
  basePath: '/Asif-Faizal.github.io',
  assetPrefix: '/Asif-Faizal.github.io/',
};

module.exports = nextConfig;
