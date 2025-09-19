import type { ActionDispatch, Dispatch, SetStateAction } from 'react'
import { useMemo, useState } from 'react'

import type { StopwatchAction } from 'sections/Contact/context/FormStopwatchContext/reducer'

export const useLocalStorage = <T>(
	key: string,
	dispatch?: ActionDispatch<[action: StopwatchAction]>,
	setter?: Dispatch<SetStateAction<T | null>>
) => {
	const [value, setValue] = useState<T | null>(null)

	const storageItem = localStorage.getItem(key)
	const storageValue = JSON.parse(storageItem as string) as T

	useMemo(() => {
		if (!storageValue) return

		const currentTime = Date.now() as T
		setValue(storageValue)

		if (setter) {
			setter(currentTime)
		}
		if (dispatch) {
			dispatch({ type: 'UPDATE_TIMER', payload: currentTime as number })
		}
	}, [storageValue, setter, dispatch])

	const setItem = (starterValue: T) => {
		localStorage.setItem(key, JSON.stringify(starterValue))
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
