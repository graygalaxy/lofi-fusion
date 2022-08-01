// @ts-check
const isDev = process.env.NODE_ENV !== 'production'

// Primary NextJS configuration
/** @type {import('next').NextConfig} */
const NextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	compiler: {
		reactRemoveProperties: true,
		removeConsole: !isDev && { exclude: ['error', 'warn'] },
	},
}

module.exports = NextConfig
