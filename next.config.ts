import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	basePath: process.env.BASE_PATH,
	output: 'export',
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: { unoptimized: true },
}

export default nextConfig
