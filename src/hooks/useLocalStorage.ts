import { useMemo, useState } from 'react'

export const useLocalStorage = <T>(key: string) => {
	const [value, setValue] = useState<T>()

	const storageItem = localStorage.getItem(key)
	const storageValue = JSON.parse(storageItem as string) as T

	useMemo(() => {
		console.log(storageValue)
		if (storageValue) {
			setValue(storageValue)
		}
	}, [storageValue])

	const setItem = (starterValue: T) => {
		localStorage.setItem(key, JSON.stringify(starterValue))
	}

	const removeItem = () => {
		localStorage.removeItem(key)
	}

	return [value, { setItem, removeItem }] as const
}
