import { Act } from './index'

type SetValue<T> = React.Dispatch<React.SetStateAction<T>>

export type State = {
	isPlaying: boolean
	isLoaded: boolean
	source: string | undefined
	loop: boolean
	duration: number
	current: number
	volume: number
	mute: boolean
}

export type Action = { type: Act; payload?: string | number | boolean }

export type Reducer<S = State, D = Action> = (state: S, action: D) => S

export type Dispatcher = (
	type: Act | keyof typeof Act,
	payload?: string | number | boolean,
) => void

export type UseAudioProps = State & {
	dispatch: Dispatcher
}
