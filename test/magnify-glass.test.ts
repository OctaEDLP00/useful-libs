import { describe, expect, it } from 'vitest'
import { magnifyingGlass } from '@packages/magnifying-glass/index'

describe('magnifying-glass', () => {
	it('should work', () => {
		expect(magnifyingGlass('#img', '#mglass'))
	})
})
