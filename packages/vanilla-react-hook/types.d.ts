export type SetStateAction<S> = S | ((prevState: S) => S)
export type Dispatch<A> = (value: A) => void
type EffectCallback = () => (void | (() => void));
