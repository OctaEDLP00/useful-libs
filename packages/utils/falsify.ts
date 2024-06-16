import type { TruthyFalsy, Args } from './types'

/**
 * This function checks if a value is falsy or truthy.
 * @typedef {'Truthy'| 'Falsy'} TruthyFalsy
 * @typedef {number | object | string | Array<unknown> | boolean | null | undefined | symbol | bigint} Args
 * @param {Args} args
 * @returns {TruthyFalsy}
 * @default 'Truthy'
 */
export function isFalsy(args: Args): TruthyFalsy {
	if (typeof args === 'number') {
		if ((args === 0 || !Number(args)) && !Number.isNaN(args)) return 'Falsy'
	}
	if (typeof args === 'bigint') {
		if ((args === 0n || !Number(args)) && !Number.isNaN(args)) return 'Falsy'
	}
	if (typeof args === 'function') {
		if (args.toString() === '') return 'Falsy'
	}
	if (typeof args === 'symbol') {
		if (args.toString() === '') return 'Falsy'
	}
	if (typeof args === 'string') {
		if (args === '' && args.length === 0) return 'Falsy'
	}
	if (typeof args === 'boolean') {
		if (args === false) return 'Falsy'
	}
	if (args == null) {
		return 'Falsy'
	}
	if (Array.isArray(args) && args instanceof Array) {
		if (args.length === 0) return 'Falsy'
		if (args.every((value) => isFalsy(value) === 'Falsy')) return 'Falsy'
	}
	if (typeof args === 'object' && args !== null && !(args instanceof Array)) {
		if (Object.keys(args).length === 0) return 'Falsy'
		if (Object.values(args).every((value) => isFalsy(value) === 'Falsy')) return 'Falsy'
	}
	return 'Truthy'
}
