// @ts-check

const isDev = process.env.NODE_ENV === 'development'
const siteURL = process.env.NEXT_PUBLIC_VERCEL_URL ?? 'http://localhost:3000/'

const site_config = {
	name: 'LoFi Fusion',
	url: siteURL,
	authorURL: 'https://avirup-dev.vercel.app',
	repository: 'https://github.com/graygalaxy/lofi-fusion',
	/**
	 * Default SEO properties
	 * @type {import('next-seo').DefaultSeoProps}
	 */
	default_seo: {
		defaultTitle: 'LoFi Fusion',
		titleTemplate: '%s | LoFi Fusion',
		description: 'Easiest way to get uup files directly from Microsoft servers',
		openGraph: { type: 'website', url: siteURL, site_name: 'Windows UUP', locale: 'en_US' },
		twitter: { handle: '@windows-uup', cardType: 'summary_large_image' },
	},
}

/**
 * check if any string or URL is external link
 * @param   {string | URL}  href
 * @returns {boolean}
 */
function isExternal(href) {
	if (!href) return false
	href = href.toString()
	return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(href)
}

/**
 * defines the perma url from a url or url segment
 * @param  {string | URL}  href
 * @param  {boolean}       tailing
 * @return {string}
 */
function permaURL(href = '', tailing = false) {
	if (!href) throw Error('URL is not provided')
	if (isExternal(href)) return href.toString()
	href = href.toString().replace(/^\//, '')
	return (siteURL + href).replace(/\/?$/, tailing ? '/' : '')
}

module.exports = Object.assign(site_config, {
	isDev,
	permaURL,
	isExternal,
})
