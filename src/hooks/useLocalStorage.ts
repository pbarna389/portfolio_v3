import type { ActionDispatch, Dispatch, SetStateAction } from 'react'
import { useMemo, useState } from 'react'

import type { StopwatchAction } from 'sections/Contact/context/FormStopwatchContext/reducer'

export const useLocalStorage = <T extends { expireTime: number }>(
	key: string,
	dispatch?: ActionDispatch<[action: StopwatchAction]>,
	setter?: Dispatch<SetStateAction<T | null>>
) => {
	const [value, setValue] = useState<T | null>(null)

	useMemo(() => {
		const storageItem = localStorage.getItem(key)
		const storageValue = JSON.parse(storageItem as string) as T

		if (!storageValue) return

		if (storageValue) {
			setValue(storageValue)
		}

		const currentTime = Date.now()

		if (dispatch) {
			dispatch({
				type: 'TIMER_RESTORE',
				payload: { timerStart: currentTime, timerEnd: storageValue.expireTime }
			})
		}
	}, [dispatch, key])

	const setItem = (starterValue: number, endValue: T) => {
		localStorage.setItem(key, JSON.stringify(endValue))

		if (dispatch) {
			dispatch({
				type: 'TIMER_START',
				payload: {
					statusText: 'Message sent successfully!',
					timerStart: starterValue,
					timerEnd: endValue.expireTime
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
