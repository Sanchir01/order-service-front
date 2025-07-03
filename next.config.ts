import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	compress: true,
	crossOrigin: 'use-credentials',
	sassOptions: {
		additionalData: `$var: red;`
	}
}

export default nextConfig
