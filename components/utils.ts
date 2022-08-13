/** creates a formatted className from given arguments */
export function classes(...args: any[]): string {
	if (!args.length) throw new Error('No argument is used')
	let names: string[] = []
	args.forEach((arg) => {
		if (!arg) return
		const argType = arg?.constructor
		if (argType === String || argType === Number) {
			names.push(arg.toString())
		} else if (argType === Array) {
			let inner = classes.apply(null, arg)
			if (inner) names.push(inner)
		} else if (argType === Object) {
			let hasClassName = typeof arg.className === 'string'
			let entries = Object.entries(hasClassName ? arg.className : arg)
			entries.map(([key, value]) => value && names.push(key))
		}
		return
	})
	return names.join(' ')
}

/**
 * dashify()
 * @description Convert a string to a dash-separated string
 * @example dashify('Google This') // 'google-this'
 * @link https://github.com/jonschlinkert/dashify
 */
export function dashify(string: string, condense: boolean = true) {
	if (typeof string !== 'string') throw new TypeError('expected a string')
	return string
		.trim()
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/\W/g, (m) => (/[À-ž]/.test(m) ? m : '-'))
		.replace(/^-+|-+$/g, '')
		.replace(/-{2,}/g, (m) => (condense ? '-' : m))
		.toLowerCase()
}
