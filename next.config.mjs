import { env } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: env.APP_BASE_PATH || '',
};

export default nextConfig;
