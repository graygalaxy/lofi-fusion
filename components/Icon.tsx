import { classes as cn } from 'components/utils'

export type IconNames = keyof typeof icon_sets
export interface IconProps extends HTML<HTMLSpanElement> {
	name: IconNames
	size?: number
	stroke?: number
}

const Icon: FC<IconProps> = (props) => {
	const { name, size = 18, stroke = 2, ...attr } = props
	if (!(name in icon_sets)) return <></>

	attr.className = cn(props.className, 'inline-flex flex-center')
	attr.role = 'img'
	// prettier-ignore
	return (
		<span aria-hidden='true' {...attr}>
			<svg viewBox='0 0 24 24' width={size} height={size}
			fill='none' strokeWidth={stroke} stroke='currentcolor'
			strokeLinecap='round' strokeLinejoin='round'>
				{icon_sets[name]}
			</svg>
		</span>
	)
}

const icon_sets = {
	'activity': <><polyline points='22 12 18 12 15 21 9 3 6 12 2 12' /></ >,
	'alert-octagon': <><polygon points='7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2' /><line x1='12' y1='8' x2='12' y2='12' /> <line x1='12' y1='16' x2='12.01' y2='16' /> </>,
	'alert-triangle': <><path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' /><line x1='12' y1='9' x2='12' y2='13' /> <line x1='12' y1='17' x2='12.01' y2='17' /> </>,
	'arrow-down-left': <><line x1='17' y1='7' x2='7' y2='17' /> <polyline points='17 17 7 17 7 7' /></ >,
	'arrow-down-right': <><line x1='7' y1='7' x2='17' y2='17' /> <polyline points='17 7 17 17 7 17' /></ >,
	'arrow-down': <><line x1='12' y1='5' x2='12' y2='19' /> <polyline points='19 12 12 19 5 12' /></ >,
	'arrow-left': <><line x1='19' y1='12' x2='5' y2='12' /> <polyline points='12 19 5 12 12 5' /></ >,
	'arrow-right': <><line x1='5' y1='12' x2='19' y2='12' /> <polyline points='12 5 19 12 12 19' /></ >,
	'arrow-up-left': <><line x1='17' y1='17' x2='7' y2='7' /> <polyline points='7 17 7 7 17 7' /></ >,
	'arrow-up-right': <><line x1='7' y1='17' x2='17' y2='7' /> <polyline points='7 7 17 7 17 17' /></ >,
	'arrow-up': <><line x1='12' y1='19' x2='12' y2='5' /> <polyline points='5 12 12 5 19 12' /></ >,
	'at-sign': <><circle cx='12' cy='12' r='4' /> <path d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94' /></ >,
	'award': <><circle cx='12' cy='8' r='7' /> <polyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88' /></ >,
	'bar-chart': <><line x1='18' y1='20' x2='18' y2='10' /> <line x1='12' y1='20' x2='12' y2='4' /> <line x1='6' y1='20' x2='6' y2='14' /> </>,
	'bell': <><path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9' /><path d='M13.73 21a2 2 0 0 1-3.46 0' /> </>,
	'book': <><path d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20' /><path d='M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' /> </>,
	'bookmark': <><path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z' /></ >,
	'box': <><path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' /><polyline points='3.27 6.96 12 12.01 20.73 6.96' /> <line x1='12' y1='22.08' x2='12' y2='12' /> </>,
	'check': <><polyline points='20 6 9 17 4 12' /></ >,
	'chevron-down': <><polyline points='6 9 12 15 18 9' /></ >,
	'chevron-left': <><polyline points='15 18 9 12 15 6' /></ >,
	'chevron-right': <><polyline points='9 18 15 12 9 6' /></ >,
	'chevron-up': <><polyline points='18 15 12 9 6 15' /></ >,
	'chevrons-left': <><polyline points='11 17 6 12 11 7' /><polyline points='18 17 13 12 18 7' /> </>,
	'chevrons-right': <><polyline points='13 17 18 12 13 7' /><polyline points='6 17 11 12 6 7' /> </>,
	'clipboard': <><path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' /><rect x='8' y='2' width='8' height='4' rx='1' ry='1' /> </>,
	'clock': <><circle cx='12' cy='12' r='10' /> <polyline points='12 6 12 12 16 14' /></ >,
	'code': <><polyline points='16 18 22 12 16 6' /><polyline points='8 6 2 12 8 18' /> </>,
	'coffee': <><path d='M18 8h1a4 4 0 0 1 0 8h-1' /><path d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z' /> <line x1='6' y1='1' x2='6' y2='4' /> <line x1='10' y1='1' x2='10' y2='4' /> <line x1='14' y1='1' x2='14' y2='4' /> </>,
	'copy': <><rect x='9' y='9' width='13' height='13' rx='2' ry='2' /> <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' /></ >,
	'corner-down-left': <><polyline points='9 10 4 15 9 20' /><path d='M20 4v7a4 4 0 0 1-4 4H4' /> </>,
	'corner-down-right': <><polyline points='15 10 20 15 15 20' /><path d='M4 4v7a4 4 0 0 0 4 4h12' /> </>,
	'corner-left-down': <><polyline points='14 15 9 20 4 15' /><path d='M20 4h-7a4 4 0 0 0-4 4v12' /> </>,
	'corner-left-up': <><polyline points='14 9 9 4 4 9' /><path d='M20 20h-7a4 4 0 0 1-4-4V4' /> </>,
	'corner-right-down': <><polyline points='10 15 15 20 20 15' /><path d='M4 4h7a4 4 0 0 1 4 4v12' /> </>,
	'corner-right-up': <><polyline points='10 9 15 4 20 9' /><path d='M4 20h7a4 4 0 0 0 4-4V4' /> </>,
	'corner-up-left': <><polyline points='9 14 4 9 9 4' /><path d='M20 20v-7a4 4 0 0 0-4-4H4' /> </>,
	'corner-up-right': <><polyline points='15 14 20 9 15 4' /><path d='M4 20v-7a4 4 0 0 1 4-4h12' /> </>,
	'credit-card': <><rect x='1' y='4' width='22' height='16' rx='2' ry='2' /> <line x1='1' y1='10' x2='23' y2='10' /> </>,
	'download': <><polyline points='8 17 12 21 16 17' /><line x1='12' y1='12' x2='12' y2='21' /> <path d='M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29' /></ >,
	'dribbble': <><circle cx='12' cy='12' r='10' /> <path d='M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32' /></ >,
	'external-link': <><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' /><polyline points='15 3 21 3 21 9' /> <line x1='10' y1='14' x2='21' y2='3' /> </>,
	'facebook': <><path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' /></ >,
	'fast-forward': <><polygon points='13 19 22 12 13 5 13 19' /><polygon points='2 19 11 12 2 5 2 19' /> </>,
	'file': <><path d='M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z' /><polyline points='13 2 13 9 20 9' /> </>,
	'filter': <><polygon points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' /></ >,
	'flag': <><path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' /><line x1='4' y1='22' x2='4' y2='15' /> </>,
	'framer': <><path d='M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7' /></ >,
	'github': <><path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' /></ >,
	'google': <><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></>,
	'grid': <><rect x='3' y='3' width='7' height='7' /> <rect x='14' y='3' width='7' height='7' /> <rect x='14' y='14' width='7' height='7' /> <rect x='3' y='14' width='7' height='7' /> </>,
	'hash': <><line x1='4' y1='9' x2='20' y2='9' /> <line x1='4' y1='15' x2='20' y2='15' /> <line x1='10' y1='3' x2='8' y2='21' /> <line x1='16' y1='3' x2='14' y2='21' /> </>,
	'headphones': <><path d='M3 18v-6a9 9 0 0 1 18 0v6' /><path d='M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z' /> </>,
	'heart': <><path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' /></ >,
	'help-circle': <><circle cx='12' cy='12' r='10' /> <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' /><line x1='12' y1='17' x2='12.01' y2='17' /> </>,
	'home': <><path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' /><polyline points='9 22 9 12 15 12 15 22' /> </>,
	'image': <><rect x='3' y='3' width='18' height='18' rx='2' ry='2' /> <circle cx='8.5' cy='8.5' r='1.5' /> <polyline points='21 15 16 10 5 21' /></ >,
	'info': <><circle cx='12' cy='12' r='10' /> <line x1='12' y1='16' x2='12' y2='12' /> <line x1='12' y1='8' x2='12.01' y2='8' /> </>,
	'instagram': <><rect x='2' y='2' width='20' height='20' rx='5' ry='5' /> <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' /><line x1='17.5' y1='6.5' x2='17.51' y2='6.5' /> </>,
	'layout': <><rect x='3' y='3' width='18' height='18' rx='2' ry='2' /> <line x1='3' y1='9' x2='21' y2='9' /> <line x1='9' y1='21' x2='9' y2='9' /> </>,
	'link': <><path d='M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3' /><line x1='8' y1='12' x2='16' y2='12' /> </>,
	'link-2': <><path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' /><path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' /> </>,
	'list': <><line x1='8' y1='6' x2='21' y2='6' /> <line x1='8' y1='12' x2='21' y2='12' /> <line x1='8' y1='18' x2='21' y2='18' /> <line x1='3' y1='6' x2='3.01' y2='6' /> <line x1='3' y1='12' x2='3.01' y2='12' /> <line x1='3' y1='18' x2='3.01' y2='18' /> </>,
	'lock': <><rect x='3' y='11' width='18' height='11' rx='2' ry='2' /> <path d='M7 11V7a5 5 0 0 1 10 0v4' /></ >,
	'mail': <><path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' /><polyline points='22,6 12,13 2,6' /> </>,
	'menu': <><line x1='3' y1='12' x2='21' y2='12' /> <line x1='3' y1='6' x2='21' y2='6' /> <line x1='3' y1='18' x2='21' y2='18' /> </>,
	'minus': <><line x1='5' y1='12' x2='19' y2='12' /> </>,
	'moon': <><path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' /></ >,
	'more-horizontal': <><circle cx='12' cy='12' r='1' /> <circle cx='19' cy='12' r='1' /> <circle cx='5' cy='12' r='1' /> </>,
	'more-vertical': <><circle cx='12' cy='12' r='1' /> <circle cx='12' cy='5' r='1' /> <circle cx='12' cy='19' r='1' /> </>,
	'music': <><path d='M9 18V5l12-2v13' /><circle cx='6' cy='18' r='3' /> <circle cx='18' cy='16' r='3' /> </>,
	'paperclip': <><path d='M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48' /></ >,
	'pause': <><rect x='6' y='4' width='4' height='16' /> <rect x='14' y='4' width='4' height='16' /> </>,
	'play': <><polygon points='5 3 19 12 5 21 5 3' /></ >,
	'plus': <><line x1='12' y1='5' x2='12' y2='19' /> <line x1='5' y1='12' x2='19' y2='12' /> </>,
	'radio': <><circle cx='12' cy='12' r='2' /> <path d='M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14' /></ >,
	'repeat': <><polyline points='17 1 21 5 17 9' /><path d='M3 11V9a4 4 0 0 1 4-4h14' /> <polyline points='7 23 3 19 7 15' /><path d='M21 13v2a4 4 0 0 1-4 4H3' /> </>,
	'rewind': <><polygon points='11 19 2 12 11 5 11 19' /><polygon points='22 19 13 12 22 5 22 19' /> </>,
	'rss': <><path d='M4 11a9 9 0 0 1 9 9' /><path d='M4 4a16 16 0 0 1 16 16' /> <circle cx='5' cy='19' r='1' /> </>,
	'save': <><path d='M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z' /><polyline points='17 21 17 13 7 13 7 21' /> <polyline points='7 3 7 8 15 8' /></ >,
	'search': <><circle cx='11' cy='11' r='8' /> <line x1='21' y1='21' x2='16.65' y2='16.65' /> </>,
	'settings': <><circle cx='12' cy='12' r='3' /> <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' /></ >,
	'share': <><circle cx='18' cy='5' r='3' /> <circle cx='6' cy='12' r='3' /> <circle cx='18' cy='19' r='3' /> <line x1='8.59' y1='13.51' x2='15.42' y2='17.49' /> <line x1='15.41' y1='6.51' x2='8.59' y2='10.49' /> </>,
	'shuffle': <><polyline points='16 3 21 3 21 8' /><line x1='4' y1='20' x2='21' y2='3' /> <polyline points='21 16 21 21 16 21' /><line x1='15' y1='15' x2='21' y2='21' /> <line x1='4' y1='4' x2='9' y2='9' /> </>,
	'sidebar': <><rect x='3' y='3' width='18' height='18' rx='2' ry='2' /> <line x1='9' y1='3' x2='9' y2='21' /> </>,
	'skip-back': <><polygon points='19 20 9 12 19 4 19 20' /><line x1='5' y1='19' x2='5' y2='5' /> </>,
	'skip-forward': <><polygon points='5 4 15 12 5 20 5 4' /><line x1='19' y1='5' x2='19' y2='19' /> </>,
	'slash': <><circle cx='12' cy='12' r='10' /> <line x1='4.93' y1='4.93' x2='19.07' y2='19.07' /> </>,
	'star': <><polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' /></ >,
	'sun': <><circle cx='12' cy='12' r='5' /> <line x1='12' y1='1' x2='12' y2='3' /> <line x1='12' y1='21' x2='12' y2='23' /> <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' /> <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' /> <line x1='1' y1='12' x2='3' y2='12' /> <line x1='21' y1='12' x2='23' y2='12' /> <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' /> <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' /> </>,
	'tag': <><path d='M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z' /><line x1='7' y1='7' x2='7.01' y2='7' /> </>,
	'thumbs-down': <><path d='M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17' /></ >,
	'thumbs-up': <><path d='M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3' /></ >,
	'trash': <><polyline points='3 6 5 6 21 6' /><path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' /> </>,
	'trending-down': <><polyline points='23 18 13.5 8.5 8.5 13.5 1 6' /><polyline points='17 18 23 18 23 12' /> </>,
	'trending-up': <><polyline points='23 6 13.5 15.5 8.5 10.5 1 18' /><polyline points='17 6 23 6 23 12' /> </>,
	'twitter': <><path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' /></ >,
	'upload': <><path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' /><polyline points='17 8 12 3 7 8' /> <line x1='12' y1='3' x2='12' y2='15' /> </>,
	'user': <><path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' /><circle cx='12' cy='7' r='4' /> </>,
	'volume-1': <><polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' /><path d='M15.54 8.46a5 5 0 0 1 0 7.07' /> </>,
	'volume-2': <><polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' /><path d='M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07' /> </>,
	'volume-x': <><polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' /><line x1='23' y1='9' x2='17' y2='15' /> <line x1='17' y1='9' x2='23' y2='15' /> </>,
	'volume': <><polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' /></ >,
	'wifi-off': <><line x1='1' y1='1' x2='23' y2='23' /> <path d='M16.72 11.06A10.94 10.94 0 0 1 19 12.55' /><path d='M5 12.55a10.94 10.94 0 0 1 5.17-2.39' /> <path d='M10.71 5.05A16 16 0 0 1 22.58 9' /><path d='M1.42 9a15.91 15.91 0 0 1 4.7-2.88' /> <path d='M8.53 16.11a6 6 0 0 1 6.95 0' /><line x1='12' y1='20' x2='12.01' y2='20' /> </>,
	'wifi': <><path d='M5 12.55a11 11 0 0 1 14.08 0' /><path d='M1.42 9a16 16 0 0 1 21.16 0' /> <path d='M8.53 16.11a6 6 0 0 1 6.95 0' /><line x1='12' y1='20' x2='12.01' y2='20' /> </>,
	'x': <><line x1='18' y1='6' x2='6' y2='18' /> <line x1='6' y1='6' x2='18' y2='18' /> </>,
	'youtube': <><path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' /><polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' /> </>,
}

export default Icon
