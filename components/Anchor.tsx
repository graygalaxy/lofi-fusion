import Link, { LinkProps as NextLinkProps } from 'next/link'
import { isExternal } from 'site.config'

type LinkProps = Omit<NextLinkProps, 'scroll' | 'shallow' | 'locale'>
type HTMLProps = Omit<HTML<HTMLAnchorElement>, keyof LinkProps | 'title'>
interface AnchorProps extends LinkProps, HTMLProps, TagProp {
	text?: React.ReactNode
	title?: string | boolean
}

const Anchor: FC<AnchorProps> = (props: AnchorProps) => {
	const { tag: Tag = 'a', as, href: xHref, replace, onClick, text, ...attr } = props
	const href = xHref.toString()
	const URLstring = href?.replace(/https?\:\/+(www.)?/, '')

	// set children as either children or text or only URL
	attr.children = props.children ?? text ?? URLstring
	if (isExternal(href) && !props.target) {
		attr.target = '_blank'
	}
	if (attr.title === true && typeof props.children === 'string') {
		attr.title = attr.children as string
	}

	return (
		<Link {...{ as, href, replace, onClick }} passHref={Tag !== 'a'}>
			<Tag {...attr} />
		</Link>
	)
}

export default Anchor
