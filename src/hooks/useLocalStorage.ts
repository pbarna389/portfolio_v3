import type { ActionDispatch, Dispatch, SetStateAction } from 'react'
import { useMemo, useState } from 'react'

import type { StopwatchAction } from 'sections/Contact/context/FormStopwatchContext/reducer'

export const useLocalStorage = <T extends number>(
	key: string,
	dispatch?: ActionDispatch<[action: StopwatchAction<T>]>,
	setter?: Dispatch<SetStateAction<T | null>>
) => {
	const [value, setValue] = useState<T | null>(null)

	const storageItem = localStorage.getItem(key)
	const storageValue = JSON.parse(storageItem as string) as T

	useMemo(() => {
		if (!storageValue) return

		const currentTime = Date.now() as T

		if (setter) {
			setValue(storageValue)
			setter(currentTime)
		}
		if (dispatch) {
			dispatch({
				type: 'TIMER_RESTORE',
				payload: { timerStart: currentTime, timerEnd: storageValue }
			})
		}
	}, [storageValue, setter, dispatch])

	const setItem = (starterValue: T, endValue: T) => {
		localStorage.setItem(key, JSON.stringify(endValue))

		if (dispatch) {
			dispatch({
				type: 'TIMER_START',
				payload: {
					statusText: 'Message sent successfully!',
					timerStart: starterValue,
					timerEnd: endValue
				}
			})
		}
	}

	const removeItem = () => {
		localStorage.removeItem(key)
		if (setter) {
			setter(null)
		}
		if (dispatch) {
			dispatch({ type: 'RESET_STATE' })
		}
		setValue(null)
	}

	return [value, { setItem, removeItem }] as const
}
