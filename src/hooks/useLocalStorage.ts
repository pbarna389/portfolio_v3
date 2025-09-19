import { type Dispatch, type SetStateAction, useMemo, useState } from 'react'

export const useLocalStorage = <T>(
	key: string,
	setter: Dispatch<SetStateAction<T | undefined>>
) => {
	const [value, setValue] = useState<T>()

	const storageItem = localStorage.getItem(key)
	const storageValue = JSON.parse(storageItem as string) as T

	useMemo(() => {
		if (!setter || !storageValue) return

		const currentTime = Date.now() as T

		setValue(storageValue)
		setter(currentTime)
	}, [storageValue, setter])

	const setItem = (starterValue: T) => {
		localStorage.setItem(key, JSON.stringify(starterValue))
	}

	const removeItem = () => {
		localStorage.removeItem(key)
		setter(undefined)
		setValue(undefined)
	}

	return [value, { setItem, removeItem }] as const
}
