import { Dispatch, SetStateAction } from './types'

function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>] {
	let state: S = typeof initialState === 'function' ? (initialState as () => S)() : initialState
	const listeners: Array<() => void> = []

	function setState(action: SetStateAction<S>): void {
		state = typeof action === 'function' ? (action as (prevState: S) => S)(state) : action
		listeners.forEach(listener => listener())
	}

	function subscribe(listener: () => void): () => void {
		listeners.push(listener)
		return () => {
			const index = listeners.indexOf(listener)
			if (index > -1) {
				listeners.splice(index, 1)
			}
		}
	}

	return [state, setState]
}

export { useState }
export default useState
