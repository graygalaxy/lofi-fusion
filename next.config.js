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
	webpack: (config) => {
		const svgoConfig = { plugins: [{ name: 'removeViewBox', active: false }] }
		// add support for SVG import
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: { and: [/\.(js|ts|md)x?$/] },
			use: { loader: '@svgr/webpack', options: { svgoConfig } },
		})

		return config
	},
}

module.exports = NextConfig
