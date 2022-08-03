import { NextSeo, DefaultSeo } from 'next-seo'
import { default_seo, permaURL } from 'site.config'

const SEO: FC<SeoProps> = (props) => {
	let canon = props.canonical
	let og_url = props.openGraph?.url
	const seo = { ...props, openGraph: props.openGraph || {} }

	if (typeof canon === 'string') {
		seo.canonical = permaURL(canon)
		if (typeof og_url !== 'string') seo.openGraph.url = permaURL(canon)
	}
	if (typeof og_url === 'string') {
		seo.openGraph.url = permaURL(og_url)
	}

	return <NextSeo {...seo} />
}

const Default: React.FC = () => {
	return <DefaultSeo {...default_seo} />
}

export default Object.assign(SEO, { Default })
