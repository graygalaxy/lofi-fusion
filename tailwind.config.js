// @ts-check

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./**/*.{tsx}'],
	theme: {
		container: {
			center: true,
			padding: '1.75rem',
		},
		extend: {
			spacing: {
				nav: 'var(--nav-height)',
			},
			colors: {
				primary: 'rgba(var(--color-primary), <alpha-value>)',
				// prettier-ignore
				gray: {
					50: '#fafafa', 100: '#f5f5f5', 200: '#e5e5e5', 300: '#d4d4d4', 400: '#a3a3a3',
					500: '#737373', 600: '#525252', 700: '#404040', 800: '#262626', 900: '#171717'
				},
			},
		},
	},
	plugins: [],
}
