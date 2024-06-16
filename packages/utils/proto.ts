import { type Options, type Locale } from './types'

Date.prototype.localDate = function (optionsOrLocaleString?: Options | Locale, date?: Date): Date {
	let localeStr: Locale = 'en-US'
	let d: Date = new Date()

	if (typeof optionsOrLocaleString === 'object' && optionsOrLocaleString !== null) {
		const { localeString, date } = optionsOrLocaleString
		localeStr = localeString || 'en-US'
		d = date || new Date()
	} else if (typeof optionsOrLocaleString === 'string') {
		localeStr = optionsOrLocaleString
		d = date || new Date()
	}

	return new Date(d.toLocaleString(localeStr))
}
