import { Anchor, Icon } from 'components'
import { classes as cn } from 'components/utils'
import site from 'site.config'

import Vercel from 'public/vercel.svg'

const Footer: FC<HTML> = (props) => {
	const { ...attr } = props

	attr.className = cn(props, 'container py-6 text-neutral-700 dark:text-neutral-300')

	return (
		<footer {...attr}>
			<hr className='mb-4 border-neutral-200 dark:border-neutral-800' />
			<div className='flex items-center justify-between'>
				<div className='text-center'>
					<small>BY </small>
					<Anchor href={site.authorURL} className='font-heading' text='Avirup Ghosh' />
				</div>

				<Anchor href='https://vercel.com/' className='text-sm'>
					Powered By
					<Vercel fill='currentcolor' height={16} width={64} className='inline ml-1 align-[-2px]' />
				</Anchor>
			</div>
		</footer>
	)
}
export default Footer
