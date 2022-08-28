import { useLocalStorage } from 'hooks'
import { createContext, useContext, useReducer } from 'react'
import { useRef, useState } from 'react'
import { UseAudioProps, Reducer, Dispatcher, State } from './types'

const AudioContext = createContext<UseAudioProps | null>(null)

export enum Act {
	play = 'play',
	pause = 'pause',
	toggle = 'toggle',
	stop = 'stop',
	loop = 'loop',
	mute = 'mute',
	volume = 'volume',
	seek = 'seek',
	onload = 'onload',
	setSource = 'setSource',
	listening = 'listening',
}

export const useAudio = () => useContext(AudioContext) as UseAudioProps

const AudioProvider: FC = (props) => {
	// player reference
	const player = useRef<HTMLAudioElement>(null)
	const [storedVol, setStoredVol] = useLocalStorage('volume', 1)
	const seekTimeout = useRef<NodeJS.Timer | null>(null)
	const tracker = useRef<NodeJS.Timer | null>(null)

	//  prettier-ignore
	const initial: State = {
		isPlaying: false, isLoaded: false,
		source: undefined, loop: false,
		duration: 0, current: 0,
		volume: storedVol, mute: false
	}

	// action reducers
	const reducers: Reducer = (s, action) => {
		const { type, payload } = action
		const audioPlayer = player.current
		if (!audioPlayer) return s
		switch (type) {
			case Act.play: {
				if (!s.source) return s
				setTimeout(() => audioPlayer.play(), 10)
				return { ...s, isPlaying: true }
			}
			case Act.pause: {
				audioPlayer.pause()
				return { ...s, isPlaying: false }
			}
			case Act.toggle: {
				if (!s.source) return s
				reducers(s, { type: s.isPlaying ? Act.pause : Act.play })
				return { ...s, isPlaying: !s.isPlaying }
			}
			case Act.stop: {
				audioPlayer.currentTime = 0
				audioPlayer.pause()
				return { ...s, isPlaying: false, current: 0 }
			}
			case Act.loop: {
				return { ...s, loop: !s.loop }
			}
			case Act.setSource: {
				if (!payload || typeof payload !== 'string') return s
				return { ...s, source: payload }
			}
			case Act.listening: {
				return { ...s, current: audioPlayer.currentTime }
			}
			case Act.volume: {
				if (!payload || typeof payload !== 'number') return s
				const value = payload > 1 ? 1 : payload < 0 ? 0 : payload
				audioPlayer.volume = value
				setStoredVol(value)
				return { ...s, volume: value }
			}
			case Act.mute: {
				audioPlayer.volume = s.mute ? s.volume : 0
				return { ...s, mute: !s.mute }
			}
			case Act.seek: {
				if (!s.isLoaded || !payload || typeof payload !== 'number') return s
				const value = payload > s.duration ? s.duration : payload
				if (seekTimeout.current) clearTimeout(seekTimeout.current)
				seekTimeout.current = setTimeout(() => {
					audioPlayer.currentTime = value
				}, 100)
				return { ...s, current: value }
			}
			case Act.onload: {
				const duration = audioPlayer?.duration
				if (!duration || isNaN(duration)) return s
				return { ...s, duration: duration, isLoaded: true }
			}
			default: {
				return s
			}
		}
	}

	const [state, setState] = useReducer(reducers, initial)
	const dispatch: Dispatcher = (type, payload) => {
		setState({ type: type as Act, payload })
	}

	// tracking
	const startListening = () => {
		if (tracker.current) return
		tracker.current = setInterval(() => dispatch(Act.listening), 1000)
	}
	const stopListening = () => {
		if (tracker.current) clearInterval(tracker.current)
		tracker.current = null
	}

	return (
		<AudioContext.Provider value={{ ...state, dispatch }}>
			{props.children}
			<audio
				src={state.source}
				loop={state.loop}
				preload='metadata'
				ref={player}
				onLoadedMetadata={() => dispatch(Act.onload)}
				onPlay={startListening}
				onPause={stopListening}
				onAbort={stopListening}
				onError={stopListening}
				onEnded={() => dispatch(Act.stop)}
			/>
		</AudioContext.Provider>
	)
}

export default AudioProvider
