import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	basePath: process.env.PAGES_BASE_PATH,
	output: 'export',
}

export default nextConfig
