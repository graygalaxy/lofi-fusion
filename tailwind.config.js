// @ts-check

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '1.75rem',
		},
		extend: {
			spacing: {
				nav: 'var(--nav-height)',
			},
			fontFamily: {
				roboto: ['Roboto Slab', 'Segoe UI', 'system-ui'],
			},
		},
	},
	plugins: [],
}
