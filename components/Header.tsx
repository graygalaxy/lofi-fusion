import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Anchor, Icon } from 'components'
import Logo from 'public/logo.svg'
import site from 'site.config'

const Header: FC<HTML> = (props) => {
	const { ...attr } = props
	const [icon, setIcon] = useState<'sun' | 'moon'>('sun')
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
	useEffect(() => setIcon(theme === 'dark' ? 'sun' : 'moon'), [theme])

	return (
		<header {...attr} className='container flex h-nav'>
			<Anchor href='/' className='flex items-center gap-2 !text-current'>
				<Logo height={28} width={28} />
				<h3 className='tracking-[0.02em]'>{site.name}</h3>
			</Anchor>
			<div className='flex items-center gap-2 ml-auto'>
				<button type='button' onClick={toggleTheme} className='p-2 nav-button'>
					<Icon name={icon} />
					<i className='sr-only'>Toggle Theme</i>
				</button>
				<Anchor href={site.repository} className='p-2 nav-button'>
					<Icon name='github' />
					<i className='sr-only'>Github repository</i>
				</Anchor>
			</div>
		</header>
	)
}

export default Header
