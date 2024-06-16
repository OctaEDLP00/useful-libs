import { describe, it, expect, vi } from 'vitest'
import { useState } from '@packages/vanilla-react-hook/use-state'
import { useEffect } from '@packages/vanilla-react-hook/use-effect'

describe('Use state hook', () => {
	it('should return the initial state', () => {
		const [state, _setState] = useState(0)
		expect(state).toBe(0)
	})

	it('should update the state', () => {
		const [state, setState] = useState(0)
		setState(1)
		expect(state).toBe(1)
	})

	it('should update the state with a function', () => {
		const [state, setState] = useState(0)
		setState((prev) => prev + 1)
		expect(state).toBe(1)
	})
})

describe('Use effect hook', () => {
	it('should call the callback function when the component mounts', () => {
		const callback = vi.fn()
		useEffect(() => {
			callback()
		}, [])
		expect(callback).toHaveBeenCalled()
	})

	it('should call the callback function when the component updates', () => {
		const callback = vi.fn()
		const [state, setState] = useState(0)
		useEffect(() => {
			callback()
		}, [state])
		setState(1)
		expect(callback).toHaveBeenCalledTimes(2)
	})
})
