import type { NextConfig } from 'next';

/**
 * GitHub Pages: set GITHUB_PAGES_BASE_PATH to `/your-repo` for project sites.
 * User/org sites (repo named `username.github.io`) leave it unset.
 * Optional GITHUB_PAGES_URL overrides asset URLs, e.g. https://pfulara.github.io/portfolio
 */
const basePath = process.env.GITHUB_PAGES_BASE_PATH ?? '';
const pagesUrl = process.env.GITHUB_PAGES_URL?.replace(/\/$/, '');

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: pagesUrl ?? (basePath || undefined),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
