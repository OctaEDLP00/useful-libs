import { describe, it, expect } from 'vitest'
import { Dom } from '@packages/utils/dom'
import { isFalsy } from '@packages/utils/falsify'

const {
	$addEL,
	$append,
	$byName,
	$byTagName,
	$class,
	$className,
	$create,
	$id,
	$query,
	$queryAll,
	$remove,
	$removeEL
} = new Dom()

describe('Dom', () => {
	it('should be defined', () => {
		expect($addEL).toBeDefined()
		expect($append).toBeDefined()
		expect($byName).toBeDefined()
		expect($byTagName).toBeDefined()
		expect($class).toBeDefined()
		expect($className).toBeDefined()
		expect($create).toBeDefined()
		expect($id).toBeDefined()
		expect($query).toBeDefined()
		expect($queryAll).toBeDefined()
		expect($remove).toBeDefined()
		expect($removeEL).toBeDefined()
	})
})

describe('isFalsy', () => {
	it('isFalsy should return "Falsy" for falsy values', () => {
		expect(isFalsy(null)).toBe('Falsy')
		expect(isFalsy(undefined)).toBe('Falsy')
		expect(isFalsy(0)).toBe('Falsy')
		expect(isFalsy('')).toBe('Falsy')
		expect(isFalsy(false)).toBe('Falsy')
	})

	it('isFalsy should return "Truthy" for truthy values', () => {
		expect(isFalsy(1)).toBe('Truthy')
		expect(isFalsy(true)).toBe('Truthy')
		expect(isFalsy('foo')).toBe('Truthy')
		expect(isFalsy({ foo: 'bar' })).toBe('Truthy')
		expect(isFalsy([1, 2, 3])).toBe('Truthy')
	})
})

describe('localDate in Date prototype', () => {
	it('should return a new Date object with the correct locale string', () => {
		const date = new Date('2023-01-01')
		expect(new Date().localDate({ date, localeString: 'es-AR' })).equal('2023-01-01T00:00:00.000Z')
	})
})
