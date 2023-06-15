/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		API_URL: process.env.API_URL || 'http://localhost:5050/api',
	},
	experimental: {
		serverActions: true,
	}
}

module.exports = nextConfig
