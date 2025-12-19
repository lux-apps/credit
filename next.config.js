/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/credit',
  assetPrefix: '/credit',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
