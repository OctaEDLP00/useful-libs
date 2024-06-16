import type { EffectCallback } from './types'

let activeEffect: EffectCallback | null = null

function useEffect(effect: EffectCallback, dependencies: unknown[]): EffectCallback {
	// Guardar el efecto actual
	activeEffect = effect

	// Ejecutar el efecto inicial
	const cleanup = activeEffect()

	// Implementar una función para manejar la limpieza y re-ejecución del efecto si las dependencias cambian
	function updateEffect(newDependencies: unknown[]): void {
		if (dependenciesChanged(dependencies, newDependencies)) {
			if (cleanup) cleanup()
			activeEffect = effect
			activeEffect()
		}
	}

	// Función para comparar las dependencias
	function dependenciesChanged(oldDeps: unknown[], newDeps: unknown[]): boolean {
		if (oldDeps.length !== newDeps.length) return true
		for (let i = 0; i < oldDeps.length; i++) {
			if (oldDeps[i] !== newDeps[i]) return true
		}
		return false
	}

	// Simular el desmontaje del componente para limpiar el efecto
	return () => {
		if (cleanup) cleanup()
	}
}

export { useEffect }
export default useEffect
