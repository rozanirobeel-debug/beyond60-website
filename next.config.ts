import type { NextConfig } from 'next'

const basePath = process.env.GITHUB_PAGES ? '/beyond60-website' : ''

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
}

export default nextConfig
